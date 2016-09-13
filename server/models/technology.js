const mongoose  = require('mongoose')

const technologySchema = new mongoose.Schema({
    name: String,
    sentence: String,
    category: String
})

module.exports = mongoose.model('Technology', technologySchema)
