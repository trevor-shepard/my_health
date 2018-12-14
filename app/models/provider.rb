# == Schema Information
#
# Table name: providers
#
#  id         :bigint(8)        not null, primary key
#  fname      :string
#  lname      :string           not null
#  degree     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Provider < ApplicationRecord
    validates :lname, :degree, presence: true
    validates :degree,  inclusion: { in: %w(MD PA NP ND RN MSW) }
end
