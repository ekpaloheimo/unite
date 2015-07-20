# -*- coding: utf-8 -*-
require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should have correct title" do
    get :index
    assert_select "title", "Stop Disaster"
  end

  test "should localize" do
    get :index
    assert_select "div.appeal>div>h3>strong.appeal-title", "To the Secretary-General and Secretariat of the United Nations"

    get :index, locale: :fi
    assert_select "div.appeal>div>h3>strong.appeal-title", "YK:n pääsihteeri ja sihteeristö"
  end

end
