class User < ActiveRecord::Base
  has_secure_password
  has_many :events, through: :events_users
  has_many :events_users
  
  validates_presence_of :name, :email
  validates             :email, uniqueness: true 
  validates             :name, length: { minumum: 3, maximum: 30 }
  validates_format_of   :email, :with => /\w+@\w+\.\w+/i
end
