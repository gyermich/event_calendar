class ChangeDefaultNumberOfVisits < ActiveRecord::Migration
  def change
    change_column :visitors, :numberofvisits, :integer, :default =>1
  end
end
