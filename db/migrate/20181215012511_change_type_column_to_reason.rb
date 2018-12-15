class ChangeTypeColumnToReason < ActiveRecord::Migration[5.2]
  def change
    remove_column :appointments, :type
    add_column :appointments, :reason, :string
  end
end
