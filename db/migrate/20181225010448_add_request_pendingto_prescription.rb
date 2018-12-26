class AddRequestPendingtoPrescription < ActiveRecord::Migration[5.2]
  def change
    add_column :prescriptions, :request_pending, :boolean, null: false
  end
end
