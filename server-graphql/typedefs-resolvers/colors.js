const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks.js')

const typeDefs = gql`
    type Color {
        id:ID!
        color_name:String
    }
`

const resolvers = {
    Query: {
        colors: (parent, args) => dbWorks.getColors(args),
        color: (parent, args) => dbWorks.getColors(args)[0],
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}