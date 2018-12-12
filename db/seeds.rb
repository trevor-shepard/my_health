# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: 'tshepard', password: "password", fname: "Trevor", lname: "Shepard", dob: Time.new(1989, 11, 20))
user2 = User.create(username: 'agilbert', password: "password", fname: "Aubre", lname: "Tibbs", dob: Time.new(1990, 11, 30))
user3 = User.create(username: 'ttibbs', password: "password", fname: "Trev", lname: "Tibbs", dob: Time.new(1989, 11, 20))

