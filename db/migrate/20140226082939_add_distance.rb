class AddDistance < ActiveRecord::Migration
  def change
    add_column :events, :distance, :float
  end
end
