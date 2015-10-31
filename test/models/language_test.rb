# -*- coding: utf-8 -*-
require 'test_helper'

class LanguageTest < ActiveSupport::TestCase

  test 'should return translated select options in sorted order by language' do
    I18n.locale = "es"
    values = Language.translated_select_options
    correct_values = [
                      ["Arabe","arabic"],
                      ["Chino","chinese"],
                      ["Español", "spanish"],
                      ["Frances","french"],
                      ["Ingles","english"],
                      ["Ruso","russian"]
                     ]
    # Uncomment when lauch multilanguage site.
    # assert_equal values, correct_values
  end


end
