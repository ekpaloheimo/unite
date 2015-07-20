FastGettext.add_text_domain('stop-disaster', :path => File.join(Rails.root,'config/locales'), :type => :po)
FastGettext.text_domain = 'stop-disaster'
FastGettext.available_locales = ['en','fi','de','es','ru','zh'] # only allow these locales to be set (optional)
FastGettext.locale = 'en'
