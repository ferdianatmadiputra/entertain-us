const { getDatabase } = require('../config/mongodb')

module.exports = class Movies {
  static find() {
    return getDatabase().collection('movies').find().toArray()
  }
  static post (movie) {
    return getDatabase().collection('movies').insertOne(movie)
  }
}