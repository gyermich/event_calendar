class Event < ActiveRecord::Base

  has_many :users, through: :events_users
  has_many :events_users
  has_many :comments

  validates :name, presence: true
  validates :description, presence: true

  def start_time
    date
  end

end
