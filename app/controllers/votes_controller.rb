class VotesController < ApplicationController

  def new
    @vote = Vote.new
  end

  def create
    Vote.create(vote_params)
    flash[:notice] = "Thank you for your vote!"
    redirect_to root_url
  end

  private

  def vote_params
    params.require(:vote).permit(:name, :email, :country)
  end

end
