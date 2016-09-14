var mongoose = require('mongoose')


// Use different database URIs based on whether an env var exists.
var dbUri = 'mongodb://' + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@ds029426.mlab.com:29426/" + process.env.DB_NAME

mongoose.connect(dbUri)

module.exports = mongoose
