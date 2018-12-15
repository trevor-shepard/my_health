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
trevor = User.create(username: 'tshepard', password: "password", fname: "Trevor", lname: "Shepard", dob: Time.new(1989, 11, 20))
tori = User.create(username: 'snap', password: "password", fname: "Tori", lname: "Shepard", dob: Time.new(1990, 11, 30))
trev = User.create(username: 'ttibbs', password: "password", fname: "Trev", lname: "Tibbs", dob: Time.new(1989, 11, 20))

#providers
Provider.destroy_all

aubre = Provider.create(lname: 'Tibbs', fname: "Aubre", degree: "MD" )
danny = Provider.create(lname: 'Toboggin', fname: "Mantis", degree: "MD" )
jenn = Provider.create(lname: "Beaudoin", fname: "Jennifer", degree: "PA")
cate = Provider.create(lname: "Flannigan", fname: "Cate", degree: "NP")
adriana = Provider.create(lname: "Iuras", fname: "Adriana", degree: "RN")
aaron = Provider.create(lname: "Jungus", fname: "Carl", degree: "MSW")

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
    suite: "454"
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
    suite: "315"
    )

clinic = Clinic.create(
    name: "Compass Oncology", 
    address: "265 N Broadway", 
    city: "Portland",
    state: "OR", 
    zip: 97227, 
    county: "Multnomah", 
    phone: "503 413-8010", 
    fax: "503 494-5023", 
    suite: "315"
)

#shifts
Shift.destroy_all

aubre_monday = Shift.create(
    clinic_id: aubre.id,
    provider_id: plazaPMG.id, 
    start: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 8, 30),
    end: DateTime.new(next_monday.year, next_monday.month, next_monday.day, 16, 0)
    )
aubre_tuesday = Shift.create(
    clinic_id: aubre.id,
    provider_id: plazaPMG.id, 
    start: DateTime.new(next_tuesday.year, next_tuesday.month, next_tuesday.day, 8, 30),
    end: DateTime.new(next_tuesday.year, next_tuesday.month, next_tuesday.day, 16, 0)
    )
aubre_wednesday = Shift.create(
    clinic_id: aubre.id,
    provider_id: plazaPMG.id, 
    start: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 8, 30),
    end: DateTime.new(next_wednesday.year, next_wednesday.month, next_wednesday.day, 16, 0)
    )
aubre_thursday = Shift.create(
    clinic_id: aubre.id,
    provider_id: plazaPMG.id, 
    start: DateTime.new(next_thursday.year, next_thursday.month, next_thursday.day, 8, 30),
    end: DateTime.new(next_thursday.year, next_thursday.month, next_thursday.day, 16, 0)
    )
aubre_friday = Shift.create(
    clinic_id: aubre.id,
    provider_id: plazaPMG.id, 
    start: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 8, 30),
    end: DateTime.new(next_friday.year, next_friday.month, next_friday.day, 16, 0)
    )


#appointment

Appointment.destroy_all

trevor_followup = Appointment.create(
    user_id: trevor.id,
    provider_id: aubre.id,
    start: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 30),
    end: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 50),
    reason: 'new_problem',
    notes: 'poisin oak rash'
)

trevor_followup = Appointment.create(
    user_id: trevor.id,
    provider_id: aubre.id,
    start: DateTime.new(last_friday.year, last_friday.month, last_friday.day, 13, 30),
    end: DateTime.new(last_friday.year, last_friday.month, last_friday.day, 13, 50),
    reason: 'new_problem',
    notes: 'cotards delustion outbreak'
)
trevor_followup = Appointment.create(
    user_id: trevor.id,
    provider_id: aubre.id,
    start: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 30),
    end: DateTime.new(last_wednesday.year, last_wednesday.month, last_wednesday.day, 13, 50),
    reason: 'new_problem',
    notes: 'cotards delustion outbreak'
)

tori_followup = Appointment.create(
    user_id: tori.id,
    provider_id: aubre.id,
    start: DateTime.new(last_tuesday.year, last_tuesday.month, last_tuesday.day, 13, 30),
    end: DateTime.new(last_tuesday.year, last_tuesday.month, last_tuesday.day, 13, 50),
    reason: 'new_problem',
    notes: 'clinomania'
)
