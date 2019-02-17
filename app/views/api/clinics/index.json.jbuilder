@clinics.each do |clinic|
    json.set! clinic.id do
        json.extract! clinic, :name, :address, :state, :zip, :county, :phone, :fax, :suite, :city, :parking_instructions
    end
end