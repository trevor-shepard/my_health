class RemoveDateFromAppointmentAndShift < ActiveRecord::Migration[5.2]
  def change
    remove_column :shifts, :date
    remove_column :appointments, :date
  end
end
