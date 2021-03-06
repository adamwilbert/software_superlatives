const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const debug = require('debug')('app:http')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')


//add routing
const routes = require('./config/routes')
const db = require('./config/database')


//instantiate app server
const app = express()

//allow cors
app.use(cors())

//use morgan dev logging
app.use(logger('dev'))



// Helper layer (parses the requests, and adds further data).
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Defines all routes.
app.use('/', routes)

app.listen(process.env.PORT || '8080')

console.log('May the Node be with you...on port 8080')