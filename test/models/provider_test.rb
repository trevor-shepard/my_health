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

require 'test_helper'

class ProviderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
