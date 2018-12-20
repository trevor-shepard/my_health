# == Schema Information
#
# Table name: shifts
#
#  id          :bigint(8)        not null, primary key
#  clinic_id   :integer          not null
#  provider_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  start       :datetime         not null
#  end         :datetime         not null
#

class Shift < ApplicationRecord
    validates :clinic_id, :provider_id, :start, :end, presence: true
    validate :start_after_end, on: :create


    belongs_to :clinic

    belongs_to :provider
    

    def start_after_end
        errors.add(:end, "end of appointment must be before start") unless self.start < self.end
    end

    def available_timeblocks
        # find all 30 min blocks not taken by another appointment and return
        date = self.start.to_date
        appointments = self.provider.appointments.select{ |el| el.start.to_date === date }
        timeblocks = []
        proposed_start = self.start.to_time
        end_time = self.end.to_time
        
        until proposed_start >= end_time
            timeblocks.push({ start: proposed_start, end: proposed_start + 1200 }) if valid_timeblock?(appointments, proposed_start)
            proposed_start += 1200
        end
        
        return timeblocks
    end

    def valid_timeblock?(appointments, start_time)
        appointments.each do |appointment|
            appointment_start = appointment.start.to_time
            appointment_end = appointment.end.to_time
            return false if appointment_start <= start_time && start_time < appointment_end
            return false if appointment_start <= (start_time + 20) && (start_time + 20) < appointment_end
        end
        true
    end



    def self.find_next_available(provider_id, start_date, end_date)
        shifts = Shift.where(provider_id: provider_id)
        sorted = shifts.order(:start)
        
        sorted.each do |shift|
            break if shift.start >= end_date
            return shift if shift.start >= start_date
            
        end
        
        return nil
    end



    def self.find_shifts_between_range(provider_id, start_date, end_date)
        shifts = Shift.where(provider_id: provider_id)
        sorted = shifts.order(:start)
        
        between = sorted.select{ |shift| (shift.start <= end_date) && (shift.start >= start_date) }


        between

    end
    
end
