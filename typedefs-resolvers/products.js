const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks.js')

const typeDefs = gql`
    type Product {
        id:ID!
        kind:String
    }
`


const resolvers = {
    Query: {
        products: (parent, args) => dbWorks.getProducts(args),
        product: (parent, args) => dbWorks.getProducts(args)[0],
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}