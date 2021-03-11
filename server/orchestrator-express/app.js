const express = require('express')
const app = express()
const port = 3003
const index = require('./routes/index.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', index)
// series 3002 // comics 3001

app.listen(port, () => {
  console.log('Orchestrator run on port: ', port)
})