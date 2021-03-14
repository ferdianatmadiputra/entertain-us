const { gql, ApolloError } = require('apollo-server')
const Redis = require('ioredis')
const redis = new Redis()
const axios = require('axios');
const seriesUrl = 'http://localhost:4002'

module.exports = {
  typeDefs: gql`
    type Series {
      _id: ID!
      title: String
      overview: String
      poster_path: String
      popularity: Float
      tags: [String]
    }
    type UpdateResultSeries {
      updateCount: Int!
    }
    type deletedResultSeries {
      msg: String
    }

    extend type Query {
      series: [Series]
      seriesById(input: ID!): Series
    }

    input SeriesInput {
      title: String!
      overview: String!
      poster_path: String!
      popularity: Float!
      tags: [String]!
    }
    input SeriesUpdate {
      _id: ID!
      title: String!
      overview: String!
      poster_path: String!
      popularity: Float!
      tags: [String]!
    }

    extend type Mutation {
      addSeries (input: SeriesInput): Series
      delSeries (input: ID! ): deletedResultSeries
      updateSeries (input: SeriesUpdate ): UpdateResultSeries
    }
  `,
  resolvers: {
    Query: {
      series: async () => {
        try {
          const cacheSeries = await redis.get('series:data')
          if (cacheSeries) {
            return JSON.parse(cacheSeries)
          } else {
            const { data } = await axios.get(seriesUrl)
            redis.set('series:data', JSON.stringify(data))
            return data
          }
        } catch (err) {
          console.log(err)
          return new ApolloError(err)
        }
      },
      seriesById: async (parent, args, context, info) => {
        console.log(args, 'ini args')
        try {
          const { data } = await axios.get(`${seriesUrl}/${args.input}`)
          console.log('ini dari get Series by id', data)
          return data
        } catch (err) {
          console.log(err)
          return new ApolloError(err)
        }
      },
    },
    Mutation: {
      addSeries: async (parent, args, context, info) => {
        console.log(args, 'ini args')
        try {
          await redis.del('series:data')
          const { data } = await axios.post(seriesUrl, args.input)
          console.log('hasil post series', data)
          return data
        } catch (err) {
          return new ApolloError(err)
        }
      },
      delSeries: async (parent, args, context, info) => {
        console.log(args, 'ini args')
        try {
          await redis.del('series:data')
          const { data } = await axios.delete(`${seriesUrl}/${args.input}`)
          console.log('hasil delete series', data)
          return { msg: `success delete ${args.input}`}
        } catch (err) {
          console.log(err)
          return new ApolloError(err)
        }
      },
      updateSeries: async (parent, args, context, info) => {
        console.log(args, 'ini args')
        try {
          const { _id, title, overview, poster_path, popularity, tags } = args.input
          await redis.del('series:data')
          const { data } = await axios.put(`${seriesUrl}/${_id}`, {
            title, overview, poster_path, popularity, tags
          })
          console.log('hasil update series', data)
          return { updateCount: data }
        } catch (err) {
          console.log(err)
          return new ApolloError(err)
        }
      },
    }
  }
}