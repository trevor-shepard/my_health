@appointments.each do |appointment|
    json.set! appointment.id do
        json.extract! appointment, :id, :user_id, :provider_id, :start, :end, :notes, :reason
    end
end