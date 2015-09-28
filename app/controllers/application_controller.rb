class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  after_filter :add_flash_to_header
  before_filter :set_locale

  private

  def add_flash_to_header
    # only run this in case it's an Ajax request.
    return unless request.xhr?
    # add flash to header
    response.headers['X-Flash'] = flash.to_h.to_json
    # make sure flash does not appear on the next page
    flash.discard
  end  

  def set_locale
    FastGettext.text_domain = 'unite-the-armies'
    FastGettext.available_locales = ['en','es','fr','ar','ru','zh']
    FastGettext.set_locale(
                           params[:locale] || 
                           session[:locale] || 
                           request.env['HTTP_ACCEPT_LANGUAGE']
                           )
    session[:locale] = I18n.locale = FastGettext.locale
  end

end
