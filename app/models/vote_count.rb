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
    @@total ||= all.map(&:count).reduce(:+)
  end
  def self.max
    @@max ||= all.map(&:count).max
  end

  def percent_of_total
    VoteCount.total.blank? ? 0 : ((count.to_f / VoteCount.total)*100)
  end

  # Calculate width of the diagram
  #
  # Max percent of all vote_counts have 100% width. Calculate other
  # widths based on this. 
  #
  # max: 5
  # current: 2
  # width: 5.0/2*100
  def calculate_diagram_width max, current
    return 0 if current <= 0
    current.to_f/max.to_f * 100
  end

  def diagram_width
    calculate_diagram_width(self.class.max.to_f/self.class.total*100, percent_of_total)
  end


end
