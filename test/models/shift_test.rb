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

require 'test_helper'

class ShiftTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
