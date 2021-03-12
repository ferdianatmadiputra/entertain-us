const { getDatabase } = require('../config/mongodb')
const { ObjectId } = require('bson')

module.exports = class Series {
  static find() {
    return getDatabase().collection('series').find().toArray()
  }
  static findById(id) {
    const filter = { _id: ObjectId(id) };
    return getDatabase().collection('series').findOne(filter)
  }
  static post (series) {
    return getDatabase().collection('series').insertOne(series)
  }

  static update (series) {
    let content = series.content
    let id = series.id
    const filter = { _id: ObjectId(id) };
    const updateDocument = {
      $set: content,
    };
    return getDatabase().collection('series').updateOne(filter, updateDocument);
  }

  static destroy (id) {
    const filter = { _id: ObjectId(id) };
    return getDatabase().collection('series').deleteOne(filter);
  }
}