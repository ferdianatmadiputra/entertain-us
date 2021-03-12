const { ApolloServer, gql, ApolloError } = require('apollo-server')
const Redis = require('ioredis')
const redis = new Redis()

const moviesUrl = 'http://localhost:4001'
const seriesUrl = 'http://localhost:4002'

const { default: axios } = require('axios');
// const url = 'http://localhost:4000'
const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type Series {
    _id: ID!
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  input MovieInput {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  input MovieUpdate {
    _id: ID!
    title: String!
    overview: String!
    poster_path: String!
    popularity: Float!
    tags: [String]!
  }
  type UpdateResult {
    updateCount: Int!
  }
  input SeriesInput {
    title: String
    overview: String
    poster_path: String
    popularity: Float
    tags: [String]
  }
  type deletedResult {
    msg: String
  }
  type Query {
    movies: [Movie]
    movieById(input: ID!): Movie
    series: [Series]
  }
  type Mutation {
    addMovies (input: MovieInput): Movie
    delMovies (input: ID! ): deletedResult
    updateMovies (input: MovieUpdate ): UpdateResult
    addSeries (input: SeriesInput): Series
  }
  `

const resolvers = {
  Query: {
    movies: async () => {
      try {
        const cacheMovies = await redis.get('movies:data')
        if (cacheMovies) {
          return JSON.parse(cacheMovies)
        } else {
          const { data } = await axios.get(moviesUrl)
          console.log('ini dari service movies', data)
          redis.set('movies:data', JSON.stringify(data))
          return data
        }
      } catch (err) {
        console.log(err)
        return new ApolloError(err)
      }
    },
    movieById: async (parent, args, context, info) => {
      console.log(args, 'ini args')
      try {
        const { data } = await axios.get(`${moviesUrl}/${args.input}`)
        console.log('ini dari get movie by id', data)
        return data
      } catch (err) {
        console.log(err)
        return new ApolloError(err)
      }
    },
    series: async () => {
      try {
        const { data } = await axios.get(seriesUrl)
        console.log('ini dari service series', data)
        return data
      } catch (err) {
        return new ApolloError(err)
      }
    },
  },
  Mutation: {
    addMovies: async (parent, args, context, info) => {
      console.log(args, 'ini args')
      try {
        await redis.del('movies:data')
        const { data } = await axios.post(moviesUrl, args.input)
        console.log('hasil post movies', data)
        return data
      } catch (err) {
        return new ApolloError(err)
      }
    },
    delMovies: async (parent, args, context, info) => {
      console.log(args, 'ini args')
      try {
        await redis.del('movies:data')
        const { data } = await axios.delete(`${moviesUrl}/${args.input}`)
        console.log('hasil delete movies', data)
        return { msg: `success delete ${args.input}`}
      } catch (err) {
        console.log(err)
        return new ApolloError(err)
      }
    },
    updateMovies: async (parent, args, context, info) => {
      console.log(args, 'ini args')
      try {
        const { _id, title, overview, poster_path, popularity, tags } = args.input
        await redis.del('movies:data')
        const { data } = await axios.put(`${moviesUrl}/${_id}`, {
          title, overview, poster_path, popularity, tags
        })
        console.log('hasil update movies', data)
        return { updateCount: data }
      } catch (err) {
        console.log(err)
        return new ApolloError(err)
      }
    },
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Apollo Server ready at ${url}`);
});
