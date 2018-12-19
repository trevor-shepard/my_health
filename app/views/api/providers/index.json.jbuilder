@providers.each do |provider|
    json.set! provider.id do 
        json.extract! provider, :id, :fname, :lname, :degree, :primary_clinic_id, :specialty
    end
end