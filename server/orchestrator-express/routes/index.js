const express = require('express')
const router = express.Router()

const movieRoute = require('./movieRoute')
const seriesRoute = require('./seriesRoute')
const entertainmeRoute = require('./entertainmeRoute')

router.use('/movies', movieRoute)
router.use('/series', seriesRoute)
router.use('/entertainme', entertainmeRoute)

module.exports = router
