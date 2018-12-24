# == Schema Information
#
# Table name: prescriptions
#
#  id            :bigint(8)        not null, primary key
#  medication_id :integer          not null
#  provider_id   :integer          not null
#  user_id       :integer          not null
#  count         :integer          not null
#  refills       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Prescription < ApplicationRecord
    validates :medication_id, :provider_id, :user_id, :count, :refills, presence: true
end
