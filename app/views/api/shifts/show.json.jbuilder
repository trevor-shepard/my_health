
json.array! @slots do |slot|
    json.start slot[:start]
    json.end slot[:end]
end