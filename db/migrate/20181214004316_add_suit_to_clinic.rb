class AddSuitToClinic < ActiveRecord::Migration[5.2]
  def change
    add_column :clinics, :suite, :string
  end
end
