import {ApolloServer} from 'apollo-server'
import queries from './typedefs-resolvers/_queries'
import mutations from './typedefs-resolvers/_mutations'
import enums from './typedefs-resolvers/_enums'
import products from './typedefs-resolvers/products'
import colors from './typedefs-resolvers/colors'
import orders from './typedefs-resolvers/orders'
import users from './typedefs-resolvers/users'
/* 
const { ApolloServer } = require('apollo-server')

const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')
const enums = require('./typedefs-resolvers/_enums')
const products = require('./typedefs-resolvers/products')
const colors = require('./typedefs-resolvers/colors')
const orders = require('./typedefs-resolvers/orders')
const users = require('./typedefs-resolvers/users')
 */
const typeDefs = [
    queries,
    mutations,
    enums,
    products.typeDefs,
    colors.typeDefs,
    orders.typeDefs,
    users.typeDefs,
]

const resolvers = [
    products.resolvers,
    colors.resolvers,
    orders.resolvers,
    users.resolvers,
]

const server =  new ApolloServer({
    typeDefs, 
    resolvers,
    introspection: true,
    playground: true
})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})