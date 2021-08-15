const { gql } = require('apollo-server')

const typeDefs = gql`
    type Mutation {
        postOrder(input: PostOrderInput!): Order!,
        editOrder(
            id: ID!,
            input: PostOrderInput!
        ): Order!
        deleteOrder(id: ID!): Order!
    }
`

module.exports = typeDefs