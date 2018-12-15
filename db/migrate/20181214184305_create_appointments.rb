class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.integer :user_id, null: false
      t.integer :clinic_id, null: false
      t.integer :provider_id, null: false
      t.date :date, null: false
      t.time :start, null: false
      t.time :end, null: false
      t.timestamps
    end

    add_index :appointments, :user_id
    add_index :appointments, :clinic_id
    add_index :appointments, :provider_id
    
  end
end
