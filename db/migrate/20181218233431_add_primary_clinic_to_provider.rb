class AddPrimaryClinicToProvider < ActiveRecord::Migration[5.2]
  def change
    add_column :providers, :primary_clinic_id, :integer, null: false
    add_index :providers, :primary_clinic_id
  end

end
