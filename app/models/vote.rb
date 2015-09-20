class Vote < ActiveRecord::Base
  include Humanizer
  require_human_on :create, :unless => :bypass_humanizer

  attr_accessor :bypass_humanizer
  attr_reader :ago

  validates :name, presence: true
  validates :country, presence: true
  validates :email, confirmation: true
  validates :email, presence: true, uniqueness: true, email: true
  validates :email_confirmation, presence: true
  validates :ip, presence: true
  validates_format_of :ip, :with => /\A(\d{1,3}\.){3}\d{1,3}\z/
  validate :validate_country_code

  after_initialize :downcase_country_code
  before_save :add_secret_token
  before_save :add_vote_count

  def ago
    diff = TimeDifference.between(Time.zone.now, created_at).in_each_component
    diff = OpenStruct.new(diff)
    if diff.seconds < 60
      ago = "%.2f" % diff.seconds
      ago_string = _("seconds")
    elsif diff.minutes < 60
      ago = "%.2f" % diff.minutes
      ago_string = _("minutes")
    else
      ago = "%.2f" % diff.days
      ago_string = _("days")
    end     
    "#{ago} #{ago_string}"
  end

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
    vote_count = VoteCount.add_vote(self)
    self.order_number = vote_count.count
  end

  def add_secret_token    
    self.secret_token = SecureRandom.hex(64)
  end

end
