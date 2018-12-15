class AddTypeNotesToAppointment < ActiveRecord::Migration[5.2]
  def change
    add_column :appointments, :type, :string, null: false
    add_column :appointments, :notes, :text
  end
end
