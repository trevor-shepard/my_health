class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.integer :medication_id, null: false
      t.integer :provider_id, null: false
      t.integer :user_id, null: false
      t.integer :count, null: false
      t.integer :refills, null: false
      t.timestamps
    end
  end
end
