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
#  suite      :string
#

class Clinic < ApplicationRecord
    STATES = %w(OR WA CA)

    COUNTIES = %w(
        Baker 
        Benton
        Clackamas
        Clatsop
        Columbia
        Coos
        Crook
        Curry
        Deschutes
        Douglas
        Gilliam
        Grant
        Harney
        Hood River
        Jackson
        Jefferson
        Josephine
        Klamath
        Lake
        Lane
        Lincoln
        Linn
        Malheur
        Marion
        Morrow
        Multnomah
        Polk
        Sherman
        Tillamook
        Umatilla
        Union
        Wallowa
        Wasco
        Washington
        Yamhill
        )
    validates :name, :address, :state, :zip, :county, :phone, :fax, presence: true
    validates :state, inclusion: { in: STATES }
    validates :county, inclusion: { in: COUNTIES }

end
