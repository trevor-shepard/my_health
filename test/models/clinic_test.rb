# == Schema Information
#
# Table name: clinics
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  address    :string           not null
#  state      :string           not null
#  zip        :integer          not null
#  county     :string           not null
#  phone      :string           not null
#  fax        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ClinicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
