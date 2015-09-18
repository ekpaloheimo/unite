require "i18n/backend/fallbacks" 
I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)

FastGettext.add_text_domain('stop-disaster', :path => File.join(Rails.root,'config/locales'), :type => :po)
FastGettext.text_domain = 'stop-disaster'
FastGettext.available_locales = ['en','es','fr','ar','ru','zh']
FastGettext.locale = 'en'


