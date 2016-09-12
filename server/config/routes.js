const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){
  res.send('hello world')
  next()
})

const technologiesController = require('../controllers/technologies')
router.get('/technologies', technologiesController.test)

module.exports = router
