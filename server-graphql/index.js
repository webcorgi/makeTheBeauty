/* import {ApolloServer} from 'apollo-server'
import queries from './typedefs-resolvers/_queries'
import mutations from './typedefs-resolvers/_mutations'
import enums from './typedefs-resolvers/_enums'
import products from './typedefs-resolvers/products'
import colors from './typedefs-resolvers/colors'
import orders from './typedefs-resolvers/orders'
import users from './typedefs-resolvers/users'
*/

const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')
const enums = require('./typedefs-resolvers/_enums')
const products = require('./typedefs-resolvers/products')
const colors = require('./typedefs-resolvers/colors')
const orders = require('./typedefs-resolvers/orders')
const users = require('./typedefs-resolvers/users')

const fs = require('fs');
const https = require('https')
const { ApolloServer } = require('apollo-server-express')
const app = express()

const typeDefs = [
    queries,
    mutations,
    enums,
    products.typeDefs,
    colors.typeDefs,
    orders.typeDefs,
    users.typeDefs,
]

const resolvers = [
    products.resolvers,
    colors.resolvers,
    orders.resolvers,
    users.resolvers,
]
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
})

const options = {
    key: fs.readFileSync("/usr/syno/etc/certificate/_archive/Q9FWHd/privkey.pem"),
    cert: fs.readFileSync("/usr/syno/etc/certificate/_archive/Q9FWHd/cert.pem"),
};
const httpsServer = https.createServer(options, app);

server.applyMiddleware({ app });
httpsServer.listen(4000, () => {
    console.log('Apollo Server with HTTPS listening on port 4000');
});