class WelcomeController < ApplicationController
  def index
    render layout: "video_layout"
  end

  def appeal
    render layout: "simple_layout"
  end
end
