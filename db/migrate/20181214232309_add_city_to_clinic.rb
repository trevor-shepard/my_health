class AddCityToClinic < ActiveRecord::Migration[5.2]
  def change
    add_column :clinics, :city, :string
  end
end
