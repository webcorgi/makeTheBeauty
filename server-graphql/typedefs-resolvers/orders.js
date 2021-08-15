const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks.js')

const typeDefs = gql`
    type Order {
        id:ID!
        user_id:Int!
        color:ColorEnum!
        title:String!
        hashtag1:String
        hashtag2:String
        hashtag3:String
        name:String
        phone:Int
        addr:String
        price:Int
        is_pay:String!
    }

    input PostOrderInput {
        user_id:Int!
        color:ColorEnum!
        title:String!
        hashtag1:String
        hashtag2:String
        hashtag3:String
        name:String
        phone:Int
        addr:String
        price:Int
        is_pay:String!
    }
`

const resolvers = {
    Query: {
        orders: (parent, args) => dbWorks.getOrders(args),
        order: (parent, args) => dbWorks.getOrders(args)[0],
        lastOrder: (parent, args) => dbWorks.getLastOrder(args),
    },
    Mutation:{
        postOrder: (parent, args) => dbWorks.postOrder(args),
        editOrder: (parent, args) => dbWorks.editOrder(args),
        deleteOrder: (parent, args) => dbWorks.deleteItem('orders', args)
    }
}

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
}
