class ConvertStartEndColumnsToDateTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :shifts, :start 
    remove_column :shifts, :end
    remove_column :appointments, :end
    remove_column :appointments, :start

    add_column :shifts, :start, :datetime, null: false
    add_column :shifts, :end, :datetime, null: false
    add_column :appointments, :start, :datetime, null: false
    add_column :appointments, :end, :datetime, null: false

  end
end
