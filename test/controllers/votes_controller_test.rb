require 'test_helper'

class VotesControllerTest < ActionController::TestCase
  
  def json_response
    ActiveSupport::JSON.decode @response.body
  end

  test 'should route' do
    assert_recognizes({:controller => 'votes', :action => 'index', :locale => "en"}, '/en/votes')

    @vote = votes("vote_1")
    @vote.email_confirmation = @vote.email
    @vote.save
    assert_recognizes({controller: 'votes', action: 'show', locale: 'en', secret_token: @vote.secret_token}, "/en/votes/#{@vote.secret_token}")

    assert_recognizes({:controller => 'votes', :action => 'email_invite'}, {method: :post, path: '/votes/email_invite'})
    assert_routing({method: :post, path: '/votes/email_invite'}, {controller: 'votes', action: 'email_invite'})
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end
  
  # /votes/recently_added
  test 'should get recent votes as json' do
    get :recently_added, format: :json, locale: "en"
    assert_response :success
    assert json_response.class == Array
    assert json_response[0]["id"]
  end

  test 'should route vote path with secret token' do
    @vote = votes("vote_1")
    @vote.email_confirmation = @vote.email
    @vote.save
    assert @vote.secret_token
    votes_path(secret_token: @vote.secret_token, locale: "en")
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
    vote = assigns(:vote)
    assert_redirected_to vote_path(locale: "en", secret_token: vote.secret_token)
    assert flash[:success], "Thank you for your vote!"
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

  test 'should send email invite' do
    options = {
      secret_token: "secret1",
      name: "Testaaja",
      email: "testi@yeah.foo",
      language: "en"
    }
    post :email_invite, options
   
    assert !ActionMailer::Base.deliveries.empty?
  end

end
