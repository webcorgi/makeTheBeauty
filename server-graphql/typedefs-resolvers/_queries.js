const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        products: [Product]
        product(id: ID!): Product

        orders: [Order]
        order(user_id:Int!): Order
        lastOrder(user_id:Int!): Order
        myOrders(user_id:Int!): Order

        colors: [Color]
        color(id: ID!): Color

        users: [User]
        user(id: ID!): User
    }
`

module.exports = typeDefs