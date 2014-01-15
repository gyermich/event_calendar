class AddDefaultToNumOfVisits < ActiveRecord::Migration
  def change
    change_column :visitors, :numberofvisits, :integer, :default =>0
  end
end
