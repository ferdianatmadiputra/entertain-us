const { ApolloServer, gql } = require('apollo-server')

const MovieSchema = require('./schema/movies')
const SeriesSchema = require('./schema/series')

const typeDefs = gql`
    type Query 
    type Mutation
  `

const resolvers = {
};

const server = new ApolloServer({ 
  typeDefs:[typeDefs, MovieSchema.typeDefs, SeriesSchema.typeDefs], resolvers: [resolvers, MovieSchema.resolvers, SeriesSchema.resolvers]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`);
});
