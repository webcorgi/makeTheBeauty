const { ApolloServer } = require('apollo-server')

const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')
const enums = require('./typedefs-resolvers/_enums')
const teams = require('./typedefs-resolvers/teams')
const people = require('./typedefs-resolvers/people')
const roles = require('./typedefs-resolvers/roles')
const equipments = require('./typedefs-resolvers/equipments')
const softwares = require('./typedefs-resolvers/softwares')
const supplies = require('./typedefs-resolvers/supplies')
const tools = require('./typedefs-resolvers/tools')
const givens = require('./typedefs-resolvers/givens')

//start
const products = require('./typedefs-resolvers/products')
const colors = require('./typedefs-resolvers/colors')
const orders = require('./typedefs-resolvers/orders')
const users = require('./typedefs-resolvers/users')



const typeDefs = [
    queries,
    mutations,
    enums,
    teams.typeDefs,
    people.typeDefs,
    roles.typeDefs,
    equipments.typeDefs,
    softwares.typeDefs,
    supplies.typeDefs,
    tools.typeDefs,
    givens.typeDefs,

    // start
    products.typeDefs,
    colors.typeDefs,
    orders.typeDefs,
    users.typeDefs,
]

const resolvers = [
    teams.resolvers,
    people.resolvers,
    roles.resolvers,
    equipments.resolvers,
    softwares.resolvers,
    supplies.resolvers,
    tools.resolvers,
    givens.resolvers,

    // start
    products.resolvers,
    colors.resolvers,
    orders.resolvers,
    users.resolvers,
]

const server =  new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})