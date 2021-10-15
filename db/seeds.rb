# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 Message.destroy_all
 
 Message.create!([{ id: 1, body: 'Good morning' },
   { id: 2, body: 'Good afternoon' },
    { id: 3, body: 'Good evening' },
     { id: 4, body: 'Good night' },
      { id: 5, body: 'Goodbye' }])

 p "Created #{Message.count} messages"