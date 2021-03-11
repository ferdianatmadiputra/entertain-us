const express = require('express')
const router = express.Router()

const entertainmeController = require('../controllers/entertainmeController')

router.get('/', entertainmeController.findAll)

module.exports = router