# == Schema Information
#
# Table name: appointments
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  provider_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  start       :datetime         not null
#  end         :datetime         not null
#  notes       :text
#  reason      :string
#

require 'test_helper'

class AppointmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
