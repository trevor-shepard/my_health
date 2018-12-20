@shifts.each do |shift|
    json.set! shift.start.strftime("%m/%d/%Y") do
        json.array! shift.available_timeblocks do |slot|
            # change slot[:start] into readable time format
            json.start slot[:start]
            json.end slot[:end]
        end
    end
end