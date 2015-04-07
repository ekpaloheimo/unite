class VoteCount < ActiveRecord::Base
  validates :country, presence: true
  validates :count, numericality: { greater_than: 0 }
  validate :validate_country_code

  after_initialize :downcase_country_name

  def downcase_country_name
    return unless country
    self.country.downcase!
  end

  def validate_country_code
    if country.blank? || Country.codes.index(country.upcase).nil?
      errors.add(:country, "is not valid")
    end
  end

  def self.add_vote vote
    vote_count = where(country: vote.country).first || 
      new(country: vote.country.downcase, count: 1)
    vote_count.count += 1 unless vote_count.new_record?
    vote_count.save
  end

  def self.total
    all.map(&:count).reduce(:+)
  end

end
