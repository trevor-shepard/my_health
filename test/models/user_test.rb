# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  session_token   :string           not null
#  password_digest :string           not null
#  username        :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  dob             :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  address         :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :integer          not null
#  county          :string           not null
#  country         :string           not null
#  email           :string           not null
#  home_phone      :string           not null
#  mobile_phone    :string
#  work_phone      :string
#  preferred_phone :string           default("home"), not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
