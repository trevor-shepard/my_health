# == Schema Information
#
# Table name: medications
#
#  id           :bigint(8)        not null, primary key
#  generic_name :string           not null
#  brand_name   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class MedicationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
