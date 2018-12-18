class AddPreferredPhoneToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :preferred_phone, :string, null: false, default: 'home'
  end
end
