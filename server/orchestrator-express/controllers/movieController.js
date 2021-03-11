const Redis = require('ioredis')
const redis = new Redis()
const axios = require('axios')
const { moviesUrl } = require('../config/baseUrl')

module.exports = class MovieController {
  static async findAll (req, res) {
    try {
      const cacheMovies = await redis.get('movies:data')
      if (cacheMovies) {
        res.status(200).json(JSON.parse(cacheMovies))
      } else {
        const resMovies = await axios.get(moviesUrl)
        redis.set('movies:data', JSON.stringify(resMovies.data))
        res.status(200).json(resMovies.data)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  static async post (req, res) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      await redis.del('movies:data')
      const { data } = await axios.post(moviesUrl, {
        title, overview, poster_path, popularity, tags
      })
      res.status(201).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  static async update (req, res) {
    try {
      const { id } = req.params
      console.log({ ...req.body}, 'isi req body')
      await redis.del('movies:data')
      const { data } = await axios.put(`${moviesUrl}/${id}`, {
        ...req.body
      })
      console.log(data, 'ini returnan put')
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  static async deleteMovie (req, res) {
    try {
      const { id } = req.params
      await redis.del('movies:data')
      const { data } = await axios.delete(`${moviesUrl}/${id}` )
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

}

