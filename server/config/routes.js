const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){
  res.send('hello world')
  next()
})
// router.get('/technologies', )

module.exports = router
