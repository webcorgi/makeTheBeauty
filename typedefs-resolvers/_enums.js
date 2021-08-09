const { gql } = require('apollo-server')

const typeDefs = gql`
    enum Sex {
        male
        female
    }

    enum BloodType {
        A
        B
        AB
        O
    }
    
    enum Role {
        developer
        designer
        planner
    }

    enum NewOrUsed {
        new
        used
    }


    enum ColorEnum {
        red
        blue
        green
        violet
    }

    enum ProductEnum {
        shampoo
        conditioner
        shampoo and conditioner
    }
`

module.exports = typeDefs