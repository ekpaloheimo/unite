# -*- coding: utf-8 -*-
require 'test_helper'

class VoteMailerTest < ActionMailer::TestCase

  test 'should have sign up method' do
    assert VoteMailer.respond_to?(:sign_up)
  end

  test 'should send sign up mail' do
    I18n.locale = :en
    vote = votes(:vote_1)
    email = VoteMailer.sign_up(vote).deliver_now
    assert_not ActionMailer::Base.deliveries.empty?
 
    # Test the body of the sent email contains what we expect it to
    assert_equal ['info@unite-the-armies.org'], email.from
    assert_equal ['user1@vote-example.com'], email.to
    assert_equal 'Thank you for your contribution to the Save the World - Unite The Armies!', email.subject
    #assert_equal read_fixture('invite').join, email.body.to_s
  end

  test 'should send email invitations' do
    I18n.locale = :en
    vote = votes(:vote_1)
    email = VoteMailer.email_invite(inviter_name: "Kalle Kutsuja", name: "Joni Töyrylä", email: "info@jonitoyryla.eu", language: "english", token: vote.md5_secret_token).deliver_now
    assert_not ActionMailer::Base.deliveries.empty?   
  end

end
