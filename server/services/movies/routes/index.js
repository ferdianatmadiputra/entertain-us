const express = require('express')
const router = express.Router()

const movieController = require('../controllers/movieController')

router.get('/', movieController.find)
router.post('/', movieController.post)
router.put('/:id', movieController.update)
router.delete('/:id', movieController.delete)

module.exports = router
