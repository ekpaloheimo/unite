class VotesController < ApplicationController
  helper_method :country_code
  helper_method :country_votes

  def new
    @vote = Vote.new
    respond_to do |format|
      format.html do
        if request.xhr?
          render layout: false
        end
      end
    end
  end

  # Share only with ajax
  def email_invite
    @vote = Vote.where(secret_token: params[:secret_token]).first
    unless @vote
      flash[:error] = "There was an error"
      head :bad_request
      return
    end

    # Share a vote with ActionMailer. If everything is ok, return 200.
    @share_valid = @vote.email_invite(params)
    
    respond_to do |format|
      format.html do
        if @share_valid
          flash[:success] = "Invitation has been sent, thank you!"
          head :ok
        else
          flash[:error] = "There was an error"
          head :bad_request
        end
      end
    end
  end

  # Add parent vote id to session and redirect to new vote.
  def add_parent_vote
    vote = Vote.where(secret_token: params[:secret_token]).first
    if vote
      session[:parent_vote_id] = vote.id
    end
    redirect_to action: :new, locale: locale
  end
  
  # If session votes[:parent_id] exists, add parent to this vote
  def create
    @vote = Vote.new(vote_params)
    @vote.ip = request.env["REMOTE_ADDR"]
    @vote.bypass_humanizer = true if Rails.env.test?

    # If session contains parent vote id, add this vote to parent vote
    # votes association.
    if session[:parent_vote_id]
      parent_vote = Vote.where(id: session[:parent_vote_id])[0]
      parent_vote.votes << @vote if parent_vote
    end

    @vote.save

    # Remove session key after succesfull save
    if @vote.valid?
      session.delete :parent_vote_id
    end

    respond_to do |format|
      format.html do
        if request.xhr?
          if @vote.valid?
            VoteMailer.sign_up(@vote).deliver_later
            flash[:success] = "Thank you for your vote!"
            head :ok
          else
            flash[:error] = "There was an error while adding your vote"
            head :bad_request
          end
        else
          if @vote.valid?
            VoteMailer.sign_up(@vote).deliver_later
            flash[:success] = "Thank you for your vote!"
            redirect_to vote_path(locale: locale, secret_token: @vote.secret_token)
          else
            render :new
          end
        end
      end
    end
  end

  def index    
    @votes = VoteCount.all
    @sorted_votes = @votes.sort { |a,b| b.count <=> a.count }
    render layout: "simple_layout"
  end

  def recently_added
    @votes = Vote.select(:id, :country,:name, :created_at).last(6)
    votes = @votes.map do |vote|
      vote_h = vote.attributes.to_h
      vote_h[:ago] = vote.ago
      vote_h
    end
    render :json => votes.to_json
  end

  def clear
    session.delete :current_vote_id    
  end

  def show
    @vote = Vote.where(secret_token: params[:secret_token]).first
    if @vote.blank?
      redirect_to votes_path(locale: locale)
      return
    end

    # Store current vote to session to allow commenting in contex of
    # this vote.
    session[:current_vote_id] = @vote.id

    @votes_count = @vote.votes_count ||= 0
    render layout: "simple_layout"
  end

  private

  def country_code
    return request[:vote][:country] if request[:vote] and request[:vote][:country]
    language_code.upcase
  end

  def language_code
    return "en" unless language_code_full
    language_code_full.split("-")[0]
  end

  def language_code_full
    http_accept_language.user_preferred_languages.first
  end

  def vote_params
    params.require(:vote).permit(:name, :email, :email_confirmation, :country, :humanizer_answer, :humanizer_question_id)
  end

end
