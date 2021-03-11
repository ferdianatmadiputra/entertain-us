const Redis = require('ioredis')
const axios = require('axios')
const redis = new Redis()
const { seriesUrl } = require('../config/baseUrl')

// 3002
module.exports = class SeriesController {
  static async findAll (req, res) {
    try {
      const cacheSeries = await redis.get('series:data')
      if (cacheSeries) {
        res.status(200).json(JSON.parse(cacheSeries))
      } else {
        const resSeries = await axios.get(seriesUrl)
        redis.set('series:data', JSON.stringify(resSeries.data))
        res.status(200).json(resSeries.data)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  static async post (req, res) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      await redis.del('series:data')
      const { data } = await axios.post(seriesUrl, {
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
      await redis.del('series:data')
      const { data } = await axios.put(`${seriesUrl}/${id}`, {
        ...req.body
      })
      console.log(data, 'ini returnan put')
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  static async deleteSeries (req, res) {
    try {
      const { id } = req.params
      await redis.del('series:data')
      const { data } = await axios.delete(`${seriesUrl}/${id}` )
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}