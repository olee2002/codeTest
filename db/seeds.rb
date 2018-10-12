# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Child.delete_all
Employee.delete_all

#Employees

james=Employee.create(
    first_name:'James',
    last_name:'Smith',
    gender:'M',
    title:'CEO',
    birth_date: '01/15/1975'
)

linda=Employee.create(
    first_name:'Linda',
    last_name:'Franko',
    gender:'F',
    title:'CFO',
    birth_date: '02/25/1962'
)

catherine=Employee.create(
    first_name:'Catherine',
    last_name:'Dodge',
    gender:'F',
    title:'Accountant',
    birth_date: '05/26/1985'
)

david=Employee.create(
    first_name:'David',
    last_name:'Kim',
    gender:'M',
    title:'Programmer',
    birth_date: '07/09/1988'
)

joseph=Employee.create(
    first_name:'Joseph',
    last_name:'Norton',
    gender:'M',
    title:'Designer',
    birth_date: '03/24/1992'
)

#Children

james = linda.children.create(
    first_name: 'James',
    last_name: 'Franko',
    gender: 'M',
    birth_date: '04/17/1982'
)

julie = linda.children.create(
    first_name: 'Julie',
    last_name: 'Franko',
    gender: 'F',
    birth_date: '11/19/1996'
)

taylor = catherine.children.create(
    first_name: 'Taylor',
    last_name: 'Smith',
    gender: 'M',
    birth_date: '07/09/1998'
)
benjamin = joseph.children.create(
    first_name: 'Benjamin',
    last_name: 'Smith',
    gender: 'M',
    birth_date: '03/24/1992'
)