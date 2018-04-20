const fetch = require('node-fetch')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql')

const x = fetch('https://api.magicthegathering.io/v1/cards')
  .then(response => response.json())
  .then(response => {
    console.log(response.cards[0].imageUrl)
  })

const CardsType = new GraphQLList(new GraphQLObjectType({
  name: 'Cards',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    imageUrl: {
      type: GraphQLString,
    },
  }),
}))

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      cards: {
        type: CardsType,
        resolve: () => fetch('https://api.magicthegathering.io/v1/cards')
          .then(response => response.json())
          .then(response => response.cards)
      },
    })
  })
})
