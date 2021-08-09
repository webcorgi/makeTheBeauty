const { gql } = require('apollo-server')

const typeDefs = gql`
    type Color {
        id:ID!
        color_name:String
    }
`

module.exports = typeDefs