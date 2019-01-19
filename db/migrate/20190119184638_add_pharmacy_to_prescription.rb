class AddPharmacyToPrescription < ActiveRecord::Migration[5.2]
  def change
    add_column :prescriptions, :pharmacy, :string
  end
end
