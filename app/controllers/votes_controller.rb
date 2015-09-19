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
  
  def create
    @vote = Vote.new(vote_params)
    @vote.ip = request.env["REMOTE_ADDR"]
    @vote.bypass_humanizer = true if Rails.env.test?
    @vote.save

    respond_to do |format|
      format.html do
        if request.xhr?
          if @vote.valid?
            flash[:success] = "Thank you for your vote!"
            head :ok
          else
            flash[:error] = "There was an error while adding your vote"
            head :ok
          end
        else
          if @vote.valid?
            flash[:success] = "Thank you for your vote!"
            redirect_to votes_path(locale: locale)
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
