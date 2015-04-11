class VotesController < ApplicationController
  helper_method :country_code
  helper_method :country_votes

  def new
    @vote = Vote.new
  end

  def create
    @vote = Vote.new(vote_params)
    @vote.ip = request.env["REMOTE_ADDR"]
    @vote.bypass_humanizer = true if Rails.env.test?
    @vote.save

    if @vote.valid?
      flash[:notice] = "Thank you for your vote!"
      redirect_to votes_path
    else
      render :new
    end
  end

  def index    
    @votes = VoteCount.all
    @sorted_votes = @votes.sort {|a,b| b.count <=> a.count}
  end

  def recently_added
    @votes = Vote.select(:id,:country,:name).last(10)
    render :json => @votes
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
