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
#

require 'test_helper'

class PrescriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
