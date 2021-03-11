const express = require('express')
const router = express.Router()

const movieRoute = require('./movieRoute')
const seriesRoute = require('./seriesRoute')

router.use('/movies', movieRoute)
router.use('/series', seriesRoute)

module.exports = router
