class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :events, :url, :description
  end
end
