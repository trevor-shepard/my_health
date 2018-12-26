class AddTypeToPrescription < ActiveRecord::Migration[5.2]
  def change
    add_column :prescriptions, :type, :string
    add_column :prescriptions, :dosage, :string
  end
end
