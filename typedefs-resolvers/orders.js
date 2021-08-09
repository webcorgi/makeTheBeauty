const { gql } = require('apollo-server')
const dbWorks = require('../dbWorks.js')

const typeDefs = gql`
    type Order {
        id:ID!
        user_id:Int!
        product:ProductEnum
        color:ColorEnum
        title:String
        hashtag1:String
        hashtag2:String
        hashtag3:String
    }

    input PostOrderInput {
        product: ProductEnum
        color: ColorEnum
        title: String
        hashtag1: String
        hashtag2: String
        hashtag3: String
    }
`

const resolvers = {
    Query: {
        orders: (parent, args) => dbWorks.getOrders(args),
        order: (parent, args) => dbWorks.getOrders(args)[0],
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
