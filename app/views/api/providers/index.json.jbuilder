@providers.each do |provider|
    json.set! provider.id do 
        json.extract! provider, :fname, :lname, :degree
    end
end