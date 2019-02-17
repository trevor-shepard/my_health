# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

next_monday = Date.today.next_week
next_tuesday = next_monday.tomorrow
next_wednesday = next_tuesday.tomorrow
next_thursday = next_wednesday.tomorrow
next_friday = next_thursday.tomorrow

last_monday = Date.today.last_week
last_tuesday = last_monday.tomorrow
last_wednesday = last_tuesday.tomorrow
last_thursday = last_wednesday.tomorrow
last_friday = last_thursday.tomorrow



User.destroy_all

# users
tori = User.create(
    username: 'snap', 
    password: "password", 
    fname: "Tori", 
    lname: "Shepard", 
    dob: Time.new(1990, 11, 30),
    address: '1400 SW Belmont St',
    state: 'Oregon',
    city: 'Portland',
    zip: 97213,
    county: 'Multnomah',
    country: 'United States of America',
    email: 'snap@ohsnap.org',
    home_phone: '999-999-9999'
    )

trev = User.create(
    username: 'ttibbs', 
    password: "password", 
    fname: "Trev", 
    lname: "Tibbs", 
    dob: Time.new(1989, 11, 20),
    address: '1400 SW Belmont St',
    state: 'Oregon',
    city: 'Portland',
    zip: 97213,
    county: 'Multnomah',
    country: 'United States of America',
    email: 'snap@ohsnap.org',
    home_phone: '999-999-9999'
    )
trevor = User.create(
    username: 'tshepard', 
    password: "password", 
    fname: "Trevor", 
    lname: "Shepard", 
    dob: Time.new(1989, 11, 20),
    address: '1400 SW Belmont St',
    state: 'Oregon',
    city: 'Portland',
    zip: 97213,
    county: 'Multnomah',
    country: 'United States of America',
    email: 'trevor@veryemployable.org',
    home_phone: '999-999-9999'
    
    )

#clinics
Clinic.destroy_all

plazaPMG = Clinic.create(
    name: "Providence Medical Group-The Plaza", 
    address: "5050 Northeast Hoyt Street",
    city: "Portland",
    state: "OR", 
    zip: 91213, 
    county: "Multnomah", 
    phone: "503 215-6405", 
    fax: "503 215-6429", 
    suite: "454",
    parking_instructions: "The Plaza Clinic is located on the fourth floor of the Providence Professional Plaza at 5050 NE Hoyt. The building has street parking on Glisan. Valet and self parking in the parking structure can be accessed from NE Hoyt St. To get to NE Hoyt St from the east, turn right off Glisan on NE 47th Ave and immediate right onto NE Hoyt. To get to NE Hoyt St from the west, turn left at the intersection of Glisan and 47th St, and immediately turn right on NE Hoyt."
    )

legacyClinic = Clinic.create(
    name: "LMG Geriatrics-GS", 
    address: "2222 NW Lovejoy Ave", 
    city: "Portland",
    state: "OR", 
    zip: 97210, 
    county: "Multnomah", 
    phone: "503 413-8010", 
    fax: "503 494-5023", 
    suite: "315",
    parking_instructions: "The Legacy Geriatrics Clinic is located on the second floor of Legacy Good Samaritan Hosptial at 222 NW Lovejoy Ave. The Building has valet and self parking down the street at a garage off NW Marshall. To get to the clinic from the Burnside, turn onto NW 23rd Ave. To get to the clinic from the 405 Bridge, take Exit 3 for NW 23rd Ave"
    )

clinic = Clinic.create(
    name: "Compass Oncology- Rose Quarter", 
    address: "265 N Broadway", 
    city: "Portland",
    state: "OR", 
    zip: 97227, 
    county: "Multnomah", 
    phone: "503 280-1223", 
    fax: "503 528-5252", 
    parking_instructions: "The Rose Quarter Clinic is located across NE Broadway from the Rose Garden Amphitheatre. Parking is provided in the lot directly in front of the clinic. To arrive from the east, take the Broadway Bridge. From the west, take NW Broadway"
)
    
#providers
Provider.destroy_all

cate = Provider.create(
    lname: "Flannigan", 
    fname: "Cate", 
    degree: "NP",
    primary_clinic_id: plazaPMG.id,
    specialty: 'Internal Medicine'
    )

aaron = Provider.create(
    lname: "Jungus", 
    fname: "Carl", 
    degree: "MSW",
    primary_clinic_id: legacyClinic.id,
    specialty: 'Sports Medicine'
    )
aubre = Provider.create(
    lname: 'Tibbs', 
    fname: "Aubre", 
    degree: "MD" ,
    primary_clinic_id: clinic.id,
    specialty: 'Internal Medicine' 
    )


#shifts
Shift.destroy_all

aubre_monday = Shift.create(
    clinic_id: clinic.id,
    provider_id: aubre.id, 
    start: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 16, 0).change(:offset => "-0800")
    )


aubre_tuesday = Shift.create(
    clinic_id: clinic.id,
    provider_id: aubre.id, 
    start: DateTime.new(next_tuesday.year, next_tuesday.month, next_tuesday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_tuesday.year, next_tuesday.month, next_tuesday.day, 16, 0).change(:offset => "-0800")
    )
aubre_wednesday = Shift.create(
    clinic_id: clinic.id,
    provider_id: aubre.id, 
    start: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 16, 0).change(:offset => "-0800")
    )
aubre_thursday = Shift.create(
    clinic_id: clinic.id,
    provider_id: aubre.id, 
    start: DateTime.new(next_thursday.year, next_thursday.month, next_thursday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_thursday.year, next_thursday.month, next_thursday.day, 16, 0).change(:offset => "-0800")
    )
aubre_friday = Shift.create(
    clinic_id: clinic.id,
    provider_id: aubre.id, 
    start: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 13, 0).change(:offset => "-0800"),
    end: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 16, 0).change(:offset => "-0800")
    )

cate_monday = Shift.create(
    clinic_id: plazaPMG.id,
    provider_id: cate.id, 
    start: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 16, 0).change(:offset => "-0800")
    )


cate_tuesday = Shift.create(
    clinic_id: plazaPMG.id,
    provider_id: cate.id, 
    start: DateTime.new(next_tuesday.year, next_tuesday.month, next_tuesday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_tuesday.year, next_tuesday.month, next_tuesday.day, 16, 0).change(:offset => "-0800")
    )
cate_wednesday = Shift.create(
    clinic_id: plazaPMG.id,
    provider_id: cate.id, 
    start: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 16, 0).change(:offset => "-0800")
    )
cate_thursday = Shift.create(
    clinic_id: plazaPMG.id,
    provider_id: cate.id, 
    start: DateTime.new(next_thursday.year, next_thursday.month, next_thursday.day, 13, 00).change(:offset => "-0800"),
    end: DateTime.new(next_thursday.year, next_thursday.month, next_thursday.day, 16, 0).change(:offset => "-0800")
    )
cate_friday = Shift.create(
    clinic_id: plazaPMG.id,
    provider_id: cate.id, 
    start: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 13, 0).change(:offset => "-0800"),
    end: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 16, 0).change(:offset => "-0800")
    )

aaron_shift = Shift.create(
    clinic_id: legacyClinic.id,
    provider_id: aaron.id, 
    start: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 12, 30).change(:offset => "-0800"),
    end: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 16, 50).change(:offset => "-0800"),
)

#appointment

Appointment.destroy_all

trevor_followup_with_aubre_1 = Appointment.create(
    user_id: trevor.id,
    provider_id: aubre.id,
    start: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 30).change(:offset => "-0800"),
    end: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 50).change(:offset => "-0800"),
    reason: 'new_problem',
    notes: 'poisin oak rash'
)

trevor_followup_with_aubre_3 = Appointment.create(
    user_id: trevor.id,
    provider_id: aubre.id,
    start: DateTime.new(last_friday.year, last_friday.month, last_friday.day, 13, 30).change(:offset => "-0800"),
    end: DateTime.new(last_friday.year, last_friday.month, last_friday.day, 13, 50).change(:offset => "-0800"),
    reason: 'new_problem',
    notes: 'cotards delustion outbreak'
)
trevor_followup_with_aubre_4 = Appointment.create(
    user_id: trevor.id,
    provider_id: aubre.id,
    start: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 30).change(:offset => "-0800"),
end: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 50).change(:offset => "-0800"),
reason: 'new_problem',
notes: 'cotards delustion outbreak'
)

trevor_followup_with_aubre_2 = Appointment.create(
    user_id: User.last.id,
    provider_id: Provider.last.id,
    start: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 13, 30).change(:offset => "-0800"),
end: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 13, 50).change(:offset => "-0800"),
reason: 'new_problem',
notes: 'future appointment'
)

trevor_session_with_Cal = Appointment.create(
    user_id: trevor.id,
    provider_id: aaron.id,
    start: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 15, 30).change(:offset => "-0800"),
end: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 15, 50).change(:offset => "-0800"),
reason: 'new_problem',
notes: 'counciling'
)

trevor_session_with_cate = Appointment.create(
    user_id: trevor.id,
    provider_id: cate.id,
    start: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 15, 30).change(:offset => "-0800"),
    end: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 15, 50).change(:offset => "-0800"),
    reason: 'new_problem',
    notes: 'knee pain'
)

trevor_session_with_cate2 = Appointment.create(
    user_id: trevor.id,
    provider_id: cate.id,
    start: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 15, 30).change(:offset => "-0800"),
    end: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 15, 50).change(:offset => "-0800"),
    reason: 'new_problem',
    notes: 'knee pain'
)



tori_followup = Appointment.create(
    user_id: tori.id,
    provider_id: aubre.id,
    start: DateTime.new(last_tuesday.year, last_tuesday.month, last_tuesday.day, 13, 30).change(:offset => "-0800"),
    end: DateTime.new(last_tuesday.year, last_tuesday.month, last_tuesday.day, 13, 50).change(:offset => "-0800"),
    reason: 'new_problem',
    notes: 'clinomania'
)

Medication.destroy_all

hydrocortone = Medication.create(
    generic_name: 'Hydrocortisone',
    brand_name: 'Hydrocortone'
)

focalin = Medication.create(
    brand_name: 'Focalin',
    generic_name: 'Dexmethylphenidate'
)

lasix = Medication.create(
    generic_name: 'Furosemide',
    brand_name: 'Lasix'
)

Prescription.destroy_all

trevor_hyrdocortone = Prescription.create(
    medication_id: hydrocortone.id,
    provider_id: aubre.id,
    user_id: trevor.id,
    refills: 1,
    count: 20,
    dosage: '10mg',
    admin_type: 'oral',
    request_pending: false,
    pharmacy: "Walgreens at 6116 Ne M L King Blvd Portland, Oregon 97211"
)


trevor_lasix = Prescription.create(
    medication_id: lasix.id,
    provider_id: aubre.id,
    user_id: trevor.id,
    refills: 6,
    count: 30,
    dosage: '5mg',
    admin_type: 'oral',
    request_pending: false,
    pharmacy: "Walgreens at 6116 Ne M L King Blvd Portland, Oregon 97211"
    

)

treovor_focalin = Prescription.create(
    medication_id: focalin.id,
    provider_id: aubre.id,
    user_id: trevor.id,
    refills: 6,
    count: 30,
    dosage: '10mg',
    admin_type: 'oral',
    request_pending: false,
    pharmacy: "Walgreens at 6116 Ne M L King Blvd Portland, Oregon 97211"


)
