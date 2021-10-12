# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 Message.destroy_all
 
 Message.create!([{ title: 'morning greetings', body: 'Good morning' },
   { title: 'afternoon greetings', body: 'Good afternoon' },
    { title: 'evening greetings', body: 'Good evening' },
     { title: 'nigt greetings', body: 'Good night' },
      { title: 'separation greetings', body: 'Goodbye' }])

 p "Created #{Message.count} messages"