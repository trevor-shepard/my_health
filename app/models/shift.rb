# == Schema Information
#
# Table name: shifts
#
#  id          :bigint(8)        not null, primary key
#  clinic_id   :integer          not null
#  provider_id :integer          not null
#  start       :time             not null
#  end         :text             not null
#  date        :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Shift < ApplicationRecord
    validates :clinic_id, :provider_id, :start, :end, :date, presence: true

    belongs_to :clinic

    belongs_to :provider_id
end
