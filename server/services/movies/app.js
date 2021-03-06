const express = require('express')
const { connect } = require('./config/mongodb.js')
const app = express()
const port = 4001
const index = require('./routes/index.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', index)

connect().then( async (db) => {
  console.log('mongo successfully connected', db)

  app.listen(port, () => {
    console.log('Movies run on port: ', port)
  })
})

