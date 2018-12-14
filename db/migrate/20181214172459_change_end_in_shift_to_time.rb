class ChangeEndInShiftToTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :shifts, :end
    add_column :shifts, :end, :time
  end
end
