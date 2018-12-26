class DropTypeAddAdminType < ActiveRecord::Migration[5.2]
  def change
    remove_column :prescriptions, :type
    add_column :prescriptions, :admin_type, :string
  end
end
