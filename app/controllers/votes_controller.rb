class VotesController < ApplicationController

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
  end

  private

  def vote_params
    params.require(:vote).permit(:name, :email, :email_confirmation, :country)
  end

end
