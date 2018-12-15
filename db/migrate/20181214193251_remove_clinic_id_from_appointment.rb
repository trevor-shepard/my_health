class RemoveClinicIdFromAppointment < ActiveRecord::Migration[5.2]
  def change
    remove_column :appointments, :clinic_id
  end
end
