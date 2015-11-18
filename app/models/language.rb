class Language

  # Valid UN language literals.
  def self.names
    %w(arabic chinese english french russian spanish)
  end
  def self.translated_names
    {
      "arabic" => _("Arabic"),
      "chinese" => _("Chinese"),
      "english" => _("English"),
      "french" => _("French"),
      "russian" => _("Russian"),
      "spanish" => _("Spanish"),
      "finnish" => _("Finnish")
    }
  end

  # Return a list of 2 item lists.
  # 
  # First item is a translated humanized literal to be used as a select
  # option topic. Second item is a option identifier to be stored.
  def self.translated_select_options
    names.map do |name|
      translated_names[name].humanize
    end.zip(names).sort do |a,b|
      a[0] <=> b[0]
    end   
  end

end
