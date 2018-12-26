@prescriptions.each do |prescription|
    json.set! prescription.id do
        json.extract! prescription, :id, :medication_id, :provider_id, :user_id, :count, :refills, :admin_type, :dosage, :admin_type, :request_pending, :created_at
    end
end