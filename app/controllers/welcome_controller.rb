class WelcomeController < ApplicationController
  def index
    render layout: "index_layout"
  end

  def video
    render layout: "video_layout"
  end

  def appeal
    render layout: "simple_layout"
  end
end
