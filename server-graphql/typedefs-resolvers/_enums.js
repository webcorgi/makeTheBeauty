const { gql } = require('apollo-server')

const typeDefs = gql`
    enum ColorEnum {
        red
        blue
        green
        violet
    }

    enum ProductEnum {
        shampoo
        conditioner
        both
    }
`

module.exports = typeDefs