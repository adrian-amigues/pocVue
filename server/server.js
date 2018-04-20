const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const cors = require('cors');

const schema = require('./schema');

const app = express()

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
