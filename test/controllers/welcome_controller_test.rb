# -*- coding: utf-8 -*-
require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should have correct title" do
    session[:locale] = :en
    get :index
    assert_select "title", "Save the Planet - Unite the Armies!"
  end

  test "should localize" do
  end


end
