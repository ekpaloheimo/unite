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

  def vote_backup votes_to
    # allekirjoittajat xx - yy esim. 1200-1300

    unless votes_to
      Rails.logger.error("Votes_to is blank")
      return
    end
    
    votes_from = UaSetting.instance.sent_at || Vote.first.created_at
    @votes = Vote.where(created_at: votes_from..votes_to).order(:created_at)

    mail_to = Rails.configuration.x.backup_email
    mail(to: mail_to, subject: "Unite The Armies - allekirjoittajat", cc: "info@jonitoyryla.eu")
  end

end


