const Redis = require('ioredis')
const redis = new Redis()
const axios = require('axios')
const { moviesUrl } = require('../config/baseUrl')
const { seriesUrl } = require('../config/baseUrl')

module.exports = class EntertainmeController {
  static async findAll (req, res) {
    try {
      const result = {}

      const cacheMovies = await redis.get('movies:data')
      if (cacheMovies) {
        result.movies = JSON.parse(cacheMovies)
      } else {
        const resMovies = await axios.get(moviesUrl)
        redis.set('movies:data', JSON.stringify(resMovies.data))
        result.movies = resMovies.data
      }

      const cacheSeries = await redis.get('series:data')
      if (cacheSeries) {
        result.tvSeries = JSON.parse(cacheSeries)
      } else {
        const resSeries = await axios.get(seriesUrl)
        redis.set('series:data', JSON.stringify(resSeries.data))
        result.tvSeries = resSeries.data
      }

      res.status(200).json(result)

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}