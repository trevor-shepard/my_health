class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :username, null: false, unique: true
      t.string :fname, null: false
      t.string :lname, null: false
      t.date :dob, null: false
      t.timestamps
    end
    add_index :users, :session_token
    add_index :users, :username
  end
end
