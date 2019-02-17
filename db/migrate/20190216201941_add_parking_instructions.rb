class AddParkingInstructions < ActiveRecord::Migration[5.2]
  def change
    add_column :clinics, :parking_instructions, :string
  end
end
