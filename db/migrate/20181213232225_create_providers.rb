class CreateProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :providers do |t|
      t.string :fname
      t.string :lname, null: false
      t.string :degree, null: false
      t.timestamps
    end
  end
end
