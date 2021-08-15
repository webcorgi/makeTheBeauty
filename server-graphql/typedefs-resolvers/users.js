const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks.js')

const typeDefs = gql`
    type User {
        id:ID!
        email:String!
        password:String!
        address:String
    }
`

const resolvers = {
    Query: {
        users: (parent, args) => dbWorks.getUsers(args),
        user: (parent, args) => dbWorks.getUsers(args)[0],
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}