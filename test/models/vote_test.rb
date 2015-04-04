require 'test_helper'

class VoteTest < ActiveSupport::TestCase

  def setup
    @vote = votes("vote_1").dup
    @vote.email = "invalid@vote-example.com"
    @vote.email_confirmation = @vote.email
  end

  def teardown
    @vote.destroy unless @vote.new_record?
  end

  test 'should not save without name' do
    @vote.name = nil
    assert_not @vote.save, "Save vote without name"
  end

  test 'should not save without country' do
    @vote.country = nil
    assert_not @vote.save, "Save vote without country"
  end

  test 'should not save without email' do
    @vote.email = nil
    assert_not @vote.save, "Save vote without email"
  end

  test 'should not save without email_confirmation' do
    @vote.email_confirmation = nil
    assert_not @vote.save, "Save vote without email_confirmation"
  end

  test 'should not save with short name' do
    @vote.name = "f"
    assert_not @vote.save, "Save vote with too short name"
    @vote.name = "fo"
    assert_not @vote.save, "Save vote with too short name"
    @vote.name = "foo"
    assert_not @vote.save, "Save vote with too short name"
  end

  test 'should not save with wrong email confirmation' do
    @vote.email_confirmation = "asdf@foobar.com"
    assert_not @vote.save, "Save vote with wrong email confirmation"
  end

  test 'should not save duplicate email' do
    @vote.email = votes("vote_1").email
    assert_not @vote.save, "Save vote with duplicate email"
  end

  test 'should not save wrong email format' do
    @vote.email = "asdf"
    @vote.email_confirmation = "asdf"
    assert_not @vote.save, "Save vote with wrong email format"
  end

  test 'should not save invalid country' do
    @vote.country = "-1"
    assert_not @vote.save, "Save vote with invalid country"
  end

  test 'should save with correct values' do
    assert @vote.save
  end

end