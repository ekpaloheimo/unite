class Vote < ActiveRecord::Base
  include Humanizer
  attr_accessor :bypass_humanizer
  require_human_on :create, :unless => :bypass_humanizer

  validates :name, presence: true
  validates :country, presence: true
  validates :email, confirmation: true
  validates :email, presence: true, uniqueness: true, email: true
  validates :email_confirmation, presence: true
  validates :ip, presence: true
  validates_format_of :ip, :with => /\A(\d{1,3}\.){3}\d{1,3}\z/

  validate :validate_country_code
  after_initialize :downcase_country_code
  after_save :add_vote_count

  # Country code is always saved with downcased letters
  def downcase_country_code
    self.country.downcase! unless country.blank?
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
