class RemoveNullFromPhone < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :home_phone, :string, null: true

  end
end
