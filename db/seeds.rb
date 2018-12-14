# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all


# users
user1 = User.create(username: 'tshepard', password: "password", fname: "Trevor", lname: "Shepard", dob: Time.new(1989, 11, 20))
user2 = User.create(username: 'agilbert', password: "password", fname: "Aubre", lname: "Tibbs", dob: Time.new(1990, 11, 30))
user3 = User.create(username: 'ttibbs', password: "password", fname: "Trev", lname: "Tibbs", dob: Time.new(1989, 11, 20))

Provider.destroy_all

#providers
doctor = Provider.create(lname: 'Tibbs', fname: "Aubre", degree: "MD" )
doctor2 = Provider.create(lname: 'Folger', fname: "Paula", degree: "MD" )
pa = Provider.create(lname: "Beaudoin", fname: "Jennifer", degree: "PA")
np = Provider.create(lname: "Flannigan", fname: "Cate", degree: "NP")
rn = Provider.create(lname: "Iuras", fname: "Adriana", degree: "RN")
msw = Provider.create(lname: "Jungus", fname: "Carl", degree: "MSW")

Clinic.destroy_all

plazaPMG = Clinic.create(name: "Providence Medical Group-The Plaza", address: "5050 Northeast Hoyt Street", state: "OR", zip: 91213, county: "Multnomah", phone: "503 215-6405", fax: "503 215-6429", suite: "454")
legacyClinic = Clinic.create(name: "LMG Geriatrics-GS", address: "2222 NW Lovejoy Ave", state: "OR", zip: 97210, county: "Multnomah", phone: "503 413-8010", fax: "503 494-5023", suite: "315")
