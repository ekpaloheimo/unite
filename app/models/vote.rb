class Vote < ActiveRecord::Base
  class EmailValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
      unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
        record.errors[attribute] << (options[:message] || "is not looking good")
      end
    end
  end

  validates :name, presence: true
  validates :name, length: { minimum: 4, maximum: 50 }
  validates :country, presence: true
  validates :email, confirmation: true
  validates :email, presence: true, uniqueness: true, email: true
  validates :email_confirmation, presence: true
  validates :ip, presence: true
  validates_format_of :ip, :with => /\A(\d{1,3}\.){3}\d{1,3}\z/
  validate :validate_country_code

  after_initialize :downcase_country_name

  after_save :add_vote_count

  def downcase_country_name
    return unless country
    self.country.downcase!
  end

  def validate_country_code
    if country.blank? || Country.codes.index(country.upcase).nil?
      errors.add(:country, "is not valid")
    end
  end

  def add_vote_count
    VoteCount.add_vote(self)
  end

end
