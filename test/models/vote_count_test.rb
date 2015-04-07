require 'test_helper'

class VoteCountTest < ActiveSupport::TestCase

  test 'should add vote count' do
    vote = votes(:vote_1)
    VoteCount.add_vote(vote)
    vote_count = VoteCount.where(:country => "FI").first

    assert vote_count
    assert_equal vote_count.count, 1
  end

  test 'should not add vote whene unvalid data' do
    assert_not VoteCount.new(:country => nil).save
    assert_not VoteCount.new(country: "fi", count: 0).save
    assert_not VoteCount.new(country: "fi", count: "a").save
    assert_not VoteCount.new(country: "fii", count: 1).save
  end

  test 'should add vote count with correct country name' do
    vote = VoteCount.new(:country => "FI", :count => 1)
    vote.save
    assert_equal vote.country, "fi"
  end

end
