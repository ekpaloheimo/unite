class VoteMailer < ApplicationMailer

  def sign_up(vote)
    @vote = vote
    mail(to: vote.email, subject: _('Thank you for your contribution to the Save the World - Unite The Armies!'))
  end
  
end
