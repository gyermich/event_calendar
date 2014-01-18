class Visitor < ActiveRecord::Base

  def self.mobile_users
    where(mobile: true).count
  end

  def self.windows_users
    where('device LIKE ?', '%Windows%').count
  end

  def self.mac_users
    where('device LIKE ?', '%Mac%').count
  end

  def self.other_users
    count - windows_users - mac_users
  end

  def self.amount_of_visits
    sum(:numberofvisits)
  end

  def self.unique_visits 
    all.count
  end

  def self.page_views
    sum(:pageviews)
  end  

  def self.direct_users
    where(:referrer.nil?).count
  end 

  def self.referred_users
    count - direct_users
  end  

  def self.chrome
    where('browser LIKE ?', '%Chrome%').count
  end

  def self.safari
    where('browser LIKE ?', '%Safari%').count
  end

  def self.firefox
    where('browser LIKE ?', '%Firefox%').count
  end

  def self.ie
    where('browser LIKE ?', '%MSIE%').count
  end
  
  def self.other
    all.count - chrome - safari - firefox - ie 
  end
end
