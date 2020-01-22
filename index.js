const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const schemaPath = './schema/index.graphql'
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
