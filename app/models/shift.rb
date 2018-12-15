# == Schema Information
#
# Table name: shifts
#
#  id          :bigint(8)        not null, primary key
#  clinic_id   :integer          not null
#  provider_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  start       :datetime         not null
#  end         :datetime         not null
#

class Shift < ApplicationRecord
    validates :clinic_id, :provider_id, :start, :end, presence: true
    validate :start_after_end, on: :create


    belongs_to :clinic

    belongs_to :provider

    def start_after_end
        errors.add(:end, "end of appointment must be before start") unless self.start < self.end
    end
end
