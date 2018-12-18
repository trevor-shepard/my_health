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

class Appointment < ApplicationRecord
    # Validations
    validates :user_id, :provider_id, :start, :end, :reason, presence: true
    validates :reason, inclusion: { in: %w(new_problem follow_up anual_wellness child)}
    validate :start_after_end, on: :create
    validate :available_timeslot_provider, on: :create
    validate :available_timeslot_user, on: :create

    # Associations
    belongs_to :provider

    belongs_to :user

    # Custom Validations


    def start_after_end
        errors.add(:end, "end of appointment must be before start") unless self.start < self.end
    end

    def available_timeslot_provider
        self.provider.shifts.each do |shift|
            if (self.start > shift.start && self.start < shift.end)
                errors.add(:start, "appointment time is unavailable, #{self.provider.fname} #{self.provider.lname} has a conflicting appointment")
            end
            if (self.end > shift.start && self.end < shift.end)
                errors.add(:end, "appointment time is unavailable, #{self.provider.fname} #{self.provider.lname} has a conflicting appointment")
            end
        end
    end

    def available_timeslot_user
        self.user.appointments.each do |appointment|
            if (self.start > appointment.start && self.start < appointment.end)
                errors.add(:start, 'another already scheduled appointment conflicts with the start of this appointment')
            end
            if (self.end > appointment.start && self.end < appointment.end)
                errors.add(:end, 'another already scheduled appointment conflicts with the end of this appointment')
            end
        end
    end


end
