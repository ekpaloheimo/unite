require 'test_helper'

class VoteCountTest < ActiveSupport::TestCase

  def teardown
    VoteCount.destroy_all
  end

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

  test 'should return correct percent of all votes' do
    vote1 = VoteCount.new(:country => "FI", :count => 1)
    vote2 = VoteCount.new(:country => "GB", :count => 1)
    vote1.save
    vote2.save

    assert_equal VoteCount.total, 2
    assert_equal vote1.percent_of_total, 50
    assert_equal vote1.percent_of_total, 50
  end

  test 'should return correct diagram width percent' do
    vote1 = VoteCount.new(:country => "FI", :count => 1)
    vote2 = VoteCount.new(:country => "GB", :count => 1)
    vote1.save
    vote2.save

    assert_equal VoteCount.total, 2
    assert vote1.diagram_width, 50

    vote3 = VoteCount.new(:country => "FI", :count => 1)
    vote4 = VoteCount.new(:country => "GB", :count => 1)
    vote3.save
    vote4.save

    assert_equal VoteCount.total, 2
    assert vote1.diagram_width, 25       
  end

  test 'should return correct diagram width percent with multiple votes' do
    vote1 = VoteCount.new(:country => "FI", :count => 2)
    vote2 = VoteCount.new(:country => "GB", :count => 1)
    vote1.save
    vote2.save

    assert vote1.diagram_width, 100
    assert vote2.diagram_width, 50
  end  

  test 'should calculate diagram width correctly' do
    assert_equal VoteCount.new.calculate_diagram_width(100000, 1), 0.001
    assert_equal VoteCount.new.calculate_diagram_width(100000, 100), 0.1
    assert_equal VoteCount.new.calculate_diagram_width(100000, 10000), 10
  end

end
