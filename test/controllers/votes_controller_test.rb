require 'test_helper'

class VotesControllerTest < ActionController::TestCase

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create vote" do
    values = {
      name: "foobar", 
      email: "foobar@foobar.com", 
      email_confirmation: "foobar@foobar.com", 
      country: "Finland"
    }
    assert_difference("Vote.count") do
      post :create, vote: values
    end
    assert_redirected_to root_path
    assert flash[:notice], "Thank you for your vote!"
  end

  test "should flash error if invalid vote" do
    values = {
      name: "foobar", 
      email: "foobar1@foobar.com", 
      email_confirmation: "foobar2@foobar.com", 
      country: "Finland",
    }
    assert_no_difference("Vote.count") do
      post :create, vote: values
    end   
  end


end
