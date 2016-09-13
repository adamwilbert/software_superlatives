const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({"message":'hello world'})
})

const technologiesController = require('../controllers/technologies')
router.get('/test', technologiesController.test)

module.exports = router
