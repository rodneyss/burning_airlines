# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Plane.destroy_all
Flight.destroy_all
Reservation.destroy_all


p1 = Plane.create(name: "spit",  seats: 10)
f1 = Flight.create(to: "sydney", from: "jersey", plane_id: 1)
f2 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)
f3 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)
f4 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)
f5 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)
f6 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)
f7 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)
f8 = Flight.create(to: "perth", from: "melbourne", plane_id: 1)

r1 = Reservation.create(flight_id: 1, user_id: 1, seat:2)

u1 = User.create(name: "rodney")
u2 = User.create(name: "ben")
u3 = User.create(name: "charles")