class AddSpecalityToProvider < ActiveRecord::Migration[5.2]
  def change
    add_column :providers, :specialty, :string
  end
end
