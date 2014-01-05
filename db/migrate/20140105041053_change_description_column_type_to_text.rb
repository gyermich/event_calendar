class ChangeDescriptionColumnTypeToText < ActiveRecord::Migration
  def change
  rename_column :events, :description, :description_string
  add_column :events, :description, :text

  Event.reset_column_information
  Event.find_each { |e| e.update_attribute(:description, e.description_string) } 
  remove_column :events, :description_string
  end
end
