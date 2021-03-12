const { gql, ApolloError } = require('apollo-server')
const Redis = require('ioredis')
const redis = new Redis()
const axios = require('axios');
const moviesUrl = 'http://localhost:4001'


module.exports = {
  typeDefs: gql`
    type Movie {
      _id: ID!
      title: String
      overview: String
      poster_path: String
      popularity: Float
      tags: [String]
    }
    type UpdateResult {
      updateCount: Int!
    }
    type deletedResult {
      msg: String
    }

    extend type Query {
      movies: [Movie]
      movieById(input: ID!): Movie
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

    extend type Mutation {
      addMovies (input: MovieInput): Movie
      delMovies (input: ID! ): deletedResult
      updateMovies (input: MovieUpdate ): UpdateResult
    }
  `,
  resolvers: {
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
  }
}