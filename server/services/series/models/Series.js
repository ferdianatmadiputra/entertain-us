const { getDatabase } = require('../config/mongodb')

module.exports = class Series {
  static find() {
    return getDatabase().collection('series').find().toArray()
  }

  static post (series) {
    return getDatabase().collection('series').insertOne(series)
  }

  static update (payload) {
    let content = payload.content
    let id = payload.id
    const filter = { _id: id };
    // update the value of the 'z' field to 42
    const updateDocument = {
      $set: content, // object type 
    };
    return getDatabase().collection('series').updateOne(filter, updateDocument);
  }

  static delete (id) {
    const filter = { _id: id };
    return getDatabase().collection('series').deleteOne(filter);
  }
}