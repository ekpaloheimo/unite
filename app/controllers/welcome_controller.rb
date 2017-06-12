# coding: utf-8
class WelcomeController < ApplicationController
  def index
  end

  def appeal
  end

  def admin
    if params[:admin_hash] != Rails.application.config.admin_hash
      redirect_to :root
      return
    end
  end

  def admin_upload
    if params[:admin_hash] != Rails.application.config.admin_hash
      redirect_to :root
      return
    end
    
    admin_csv = params[:admin_csv]

    # Parse and filter csv data
    require "csv"
    data = CSV.parse(admin_csv)
    data = filter_csv(data)

    # Add the ip of the admin
    ip = request.env["REMOTE_ADDR"]
    data.each do |vote|
      Vote.create(name: vote[0].strip, email: vote[1].strip,
                  email_confirmation: vote[1].strip, country: vote[2].strip, ip: ip)
    end
    
    flash[:success] = "Tiedosto ladattu järjestelmään, kiitos työstäsi ympäristön puolesta!"
    redirect_to :admin_index
  end

  private

  # Data is a list of vote items read from csv. Every vote should have
  # name, email and country in that order. 
  def filter_csv data
    data.select do |items|
      items.select! {|item| item.try(:strip).present? }
      if items.size != 3
        false
      else
        true
      end
    end
  end
  
end
