class WelcomeController < ApplicationController
  def index
    render layout: "video"
  end

  def appeal
    render layout: "simple_layout"
  end
end
