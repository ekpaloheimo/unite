FastGettext.add_text_domain('stop-disaster', :path => File.join(Rails.root,'config/locales'), :type => :po)
FastGettext.text_domain = 'stop-disaster'
FastGettext.available_locales = ['en','es','fr','ar','ru','zh']
FastGettext.locale = 'en'


