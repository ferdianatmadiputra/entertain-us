const { getDatabase } = require('../config/mongodb')

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
    const filter = { _id: id };
    // update the value of the 'z' field to 42
    const updateDocument = {
      $set: content,
    };
    return getDatabase().collection('movies').updateOne(filter, updateDocument);
  }

  static delete (id) {
    const filter = { _id: id };
    return getDatabase().collection('movies').deleteOne(filter);
  }
}