const database = require('./database')
console.log(database.equipments)



/* 
const database = require('../database')
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }

  type Equipment {
      id:String
      used_by:String
      count:Int
      new_or_used:String
  }
`
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
 */



//database.csvName으로 출력확인
/* 
const database = require('./database')
console.log(database.supplies) 
 */
