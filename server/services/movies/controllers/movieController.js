const Movies = require('../models/Movie')

module.exports = class movieController {
  static async find(req, res) {
    try {
      const movies = await Movies.find()
      res.status(200).json(movies)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: 'internal server error'})
    }
  }

  static async findById(req, res) {
    try {
      let id = req.params.id
      const movies = await Movies.findById(id)
      console.log(movies)
      res.status(200).json(movies)
    } catch (err) {
      console.log(err)
    }
  }

  static async post (req, res) {
    try {
      const movies = await Movies.post(req.body)
      console.log(movies)
      res.status(201).json(movies.ops[0])
    } catch (err) {
      console.log(err)
    }
  }
  static async update (req, res) {
    try {
      console.log(req.body)
      let payload = {
        id: req.params.id,
        content: req.body // content is an object ex. { title: 'blabla'}
      }
      const result = await Movies.update(payload)
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
      res.status(200).json(result.matchedCount)
    } catch (err) {
      console.log(err)
      res.status(500).json({message: 'internal server error'})

    }
  }

  static async deleteMovie (req, res) {
    try {
      let id = req.params.id
      const result = await Movies.destroy(id)
      console.log(result, ' ini dari controller moviedeelete')
      if (result.deletedCount === 1) {
        res.status(200).json({message:"Successfully deleted one document."});
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
        res.status(404).json({message:"No documents matched the query. Deleted 0 documents."})
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({message: 'internal server error'})

    }
  }
}