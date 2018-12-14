class CreateClinics < ActiveRecord::Migration[5.2]
  def change
    create_table :clinics do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :county, null: false
      t.string :phone, null: false
      t.string :fax, null: false
      t.timestamps
    end
  end
end
