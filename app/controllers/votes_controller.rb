class VotesController < ApplicationController
  helper_method :country_code
  helper_method :country_votes

  def new
    @vote = Vote.new
  end

  def create
    @vote = Vote.new(vote_params)
    @vote.ip = request.env["REMOTE_ADDR"]
    @vote.save

    if @vote.valid?
      flash[:notice] = "Thank you for your vote!"
      redirect_to root_url
    else
      render :new
    end
  end

  def index    
    @votes = Vote.all
    @sorted_votes = country_votes.to_a.sort {|a,b| b[1] <=> a[1]}

  end

  private

  

  def country_votes
    value = {}
    @votes.map do |v| 
      if value.has_key?(v.country)
        value[v.country] += 1 
      else
        value[v.country] = 1
      end
    end
    value
  end

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
    params.require(:vote).permit(:name, :email, :email_confirmation, :country)
  end

end
