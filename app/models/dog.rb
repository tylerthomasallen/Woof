class Dog < ApplicationRecord
  validates :name, :address_line_one, :zip_code, :state, :city, :lat, :lng, presence: true
  validates :name, :address_line_one, uniqueness: true
  validates :hypoallergenic, :sheds, :good_with_kids, :confident, :timid, :laidback,
  :friendly, :adaptable, :independent, :small, :medium, :large, :high_energy,
  inclusion: { in: [true, false]}

  has_many :dog_types,
    foreign_key: :dog_id,
    class_name: :DogType

  has_many :types,
    through: :dog_types,
    source: :type

  has_many :reviews,
    foreign_key: :dog_id,
    class_name: :Review

  has_many_attached :photos

  after_initialize :set_defaults

  def set_defaults
    self.hypoallergenic ||= false
    self.sheds ||= false
    self.good_with_kids ||= false
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def review_count
    self.reviews.count
  end

  def rating
    totalRating = 0
    self.reviews.each do |review|
      totalRating += review.rating
    end

    totalRating / self.review_count
  end

end
