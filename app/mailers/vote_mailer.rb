class VoteMailer < ApplicationMailer

  def sign_up(vote)
    @vote = vote
    mail(to: vote.email, subject: _('Thank you for your contribution to the Save the World - Unite The Armies!'))
  end

  # = params
  # inviter_name:  name of the inviter
  # name: name of the invited
  # email: email of the invited
  # language: language of the invitation letter
  def email_invite(options)
    return unless @inviter_name = options[:inviter_name]
    return unless @name = options[:name]
    return unless email = options[:email]
    return unless language = options[:language]
    return unless @token = options[:token]

    I18n.locale = language
    mail(to: email, subject: _('Invitation to Save the World - Unite the Armies'))
  end  
end


