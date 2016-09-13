const express = require('express')
const router = express.Router()

const technologiesController = require('../controllers/technologies')

//technologies routes
router.get('/fewd', technologiesController.fewd)
router.get('/bewd', technologiesController.bewd)


module.exports = router
