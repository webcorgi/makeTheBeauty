const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks.js')

const typeDefs = gql`
    type Goods {
        id:ID!
        color:String
    }
`


const resolvers = {
    Query: {
        goods: (parent, args) => dbWorks.getGoods(args)[0],
    },
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}