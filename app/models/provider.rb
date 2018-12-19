# == Schema Information
#
# Table name: providers
#
#  id                :bigint(8)        not null, primary key
#  fname             :string
#  lname             :string           not null
#  degree            :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  primary_clinic_id :integer          not null
#  specialty         :string
#

class Provider < ApplicationRecord
    validates :lname, :degree, presence: true
    validates :degree,  inclusion: { in: %w(MD PA NP ND RN MSW) }

    belongs_to :primary_clinic,
        foreign_key: :primary_clinic_id,
        class_name: :Clinic
    
    has_many :shifts

    has_many :appointments

    has_many :clinics, through: :shifts
end
