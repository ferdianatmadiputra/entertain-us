const Movies = require('../models/Movie')

module.exports = class movieController {
  static async find(req, res) {
    try {
      const movies = await Movies.find()
      res.status(200).json(movies)
    } catch (err) {
      console.log(err)
    }
  }

  static async post (req, res) {
    try {
      const movies = await Movies.post(req.body)
      res.status(200).json(movies)
    } catch (err) {
      console.log(err)
    }
  }
}