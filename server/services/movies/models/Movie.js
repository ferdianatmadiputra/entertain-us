const { getDatabase } = require('../config/mongodb')
const { ObjectId } = require('bson')

module.exports = class Movies {
  static find() {
    return getDatabase().collection('movies').find().toArray()
  }
  static post (movie) {
    return getDatabase().collection('movies').insertOne(movie)
  }

  static update (movie) {
    let content = movie.content
    let id = movie.id
    const filter = { _id: ObjectId(id) };
    const updateDocument = {
      $set: content,
    };
    return getDatabase().collection('movies').updateOne(filter, updateDocument);
  }

  static destroy (id) {
    const filter = { _id: ObjectId(id) };
    return getDatabase().collection('movies').deleteOne(filter);
  }
}