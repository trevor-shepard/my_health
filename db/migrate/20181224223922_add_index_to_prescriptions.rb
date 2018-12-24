class AddIndexToPrescriptions < ActiveRecord::Migration[5.2]
  def change
    add_index :prescriptions, :medication_id
    add_index :prescriptions, :provider_id
    add_index :prescriptions, :user_id
  end
end
