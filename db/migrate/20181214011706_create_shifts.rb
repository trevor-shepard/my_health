class CreateShifts < ActiveRecord::Migration[5.2]
  def change
    create_table :shifts do |t|
      t.integer :clinic_id, null: false
      t.integer :provider_id, null: false
      t.time :start, null: false
      t.text :end, null: false
      t.date :date, null: false
      t.timestamps
    end

    add_index :shifts, :clinic_id
    add_index :shifts, :provider_id
  end
end
