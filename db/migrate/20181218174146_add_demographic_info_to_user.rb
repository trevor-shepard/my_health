class AddDemographicInfoToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :address, :string, null: false
    add_column :users, :city, :string, null: false
    add_column :users, :state, :string, null: false
    add_column :users, :zip, :integer, null: false
    add_column :users, :county, :string, null: false
    add_column :users, :country, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :home_phone, :string, null: false
    add_column :users, :mobile_phone, :string
    add_column :users, :work_phone, :string
  end
end
