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
      country: "fi"
    }
    assert_difference("Vote.count") do
      post :create, vote: values
    end
    assert_redirected_to votes_path
    assert flash[:notice], "Thank you for your vote!"
  end

  test "should flash error if invalid vote" do
    values = {
      name: "foobar", 
      email: "foobar1@foobar.com", 
      email_confirmation: "foobar2@foobar.com", 
      country: "fi",
    }
    assert_no_difference("Vote.count") do
      post :create, vote: values
    end   
  end

  test 'should return correct language code' do
    @request.headers["Accept-Language"] = "fi-FI"
    assert_equal @controller.send(:language_code), "fi"
  end

  test 'should return correct country code' do
    @request.headers["Accept-Language"] = "fi-FI"
    @request.params[:vote] = {:country => "BY"}
    assert_equal @controller.send(:country_code), "BY"

    @request.headers["Accept-Language"] = nil
    @request.params[:vote] = nil
    assert_equal @controller.send(:country_code), "EN"
  end


end
