class Event < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  has_many :users, through: :events_users
  has_many :events_users
  has_many :comments
  validates :name, presence: true
  validates :date, presence: true
  validates :description, presence: true

  def start_time
    date
  end
end
