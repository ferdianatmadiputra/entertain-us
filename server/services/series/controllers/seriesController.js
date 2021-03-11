const Series = require('../models/Series')

module.exports = class seriesController {
  static async find(req, res) {
    try {
      const series = await Series.find()
      res.status(200).json(series)
    } catch (err) {
      console.log(err)
    }
  }

  static async post (req, res) {
    try {
      const series = await Series.post(req.body)
      res.status(200).json(series)
    } catch (err) {
      console.log(err)
    }
  }

  static async update (req, res) {
    try {
      let payload = {
        id: req.params.id,
        content: req.body.content // content is an object ex. { title: 'blabla'}
      }
      const result = await Series.update(payload)
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );
    } catch (err) {
      console.log(err)
    }
  }

  static async delete (req, res) {
    try {
      let id = req.params.id
      const result = await Series.delete(id)
      if (result.deletedCount === 1) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
    } catch (err) {
      console.log(err)
    }
  }
}