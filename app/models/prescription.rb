# == Schema Information
#
# Table name: prescriptions
#
#  id              :bigint(8)        not null, primary key
#  medication_id   :integer          not null
#  provider_id     :integer          not null
#  user_id         :integer          not null
#  count           :integer          not null
#  refills         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  dosage          :string
#  admin_type      :string
#  request_pending :boolean          not null
#  pharmacy        :string
#

class Prescription < ApplicationRecord
    validates :medication_id, :provider_id, :user_id, :count, :refills, :dosage, :admin_type, presence: true

    belongs_to :medication

    belongs_to :provider

    belongs_to :user
end
