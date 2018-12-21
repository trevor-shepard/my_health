class RemoveNullFalseFromDemographics < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :address, :string, null: true
    change_column :users, :city, :string, null: true
    change_column :users, :state, :string, null: true
    change_column :users, :zip, :integer, null: true
    change_column :users, :county, :string, null: true
    change_column :users, :country, :string, null: true
    change_column :users, :email, :string, null: true
    change_column :users, :preferred_phone, :string, null: true
  end
end
