@medications.each do |medication|
    json.set! medication.id do
        json.extract! medication, :generic_name, :brand_name
    end
end