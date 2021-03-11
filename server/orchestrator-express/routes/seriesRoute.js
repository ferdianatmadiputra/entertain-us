const express = require('express')
const router = express.Router()

const seriesController = require('../controllers/seriesController')

router.get('/', seriesController.findAll)
router.post('/', seriesController.post)
router.put('/:id', seriesController.update)
router.delete('/:id', seriesController.deleteSeries)

module.exports = router