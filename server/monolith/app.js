// require('dotenv').config();
const express = require('express')
const { connect } = require('./config/mongodb.js')
const app = express()
const port = 3000
const index = require('./routes/index.js')

// app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', index)
// app.use('/movies', movieRoute)

connect().then( async (db) => {
  console.log('mongo successfully connected', db)

  app.listen(port, () => {
    console.log('run on port: ', port)
  })
})

