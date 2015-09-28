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
    vote = Vote.where(secret_token: params[:secret_token]).first
    unless vote
      flash[:error] = "There was an error"
      head :bad_request
      return
    end

    # Share a vote with ActionMailer. If everything is ok, return 200.
    @share_valid = vote.email_invite(params)
    
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
  
  def create
    @vote = Vote.new(vote_params)
    @vote.ip = request.env["REMOTE_ADDR"]
    @vote.bypass_humanizer = true if Rails.env.test?
    @vote.save

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

  def show
    @vote = Vote.where(secret_token: params[:secret_token]).first
    if @vote.blank?
      redirect_to votes_path(locale: locale)
      return
    end
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
