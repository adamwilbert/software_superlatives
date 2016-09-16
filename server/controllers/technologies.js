const dotenv = require('dotenv').load()
const Technology = require("../models/technology")


module.exports = {

    fewd(req, res) {
        Technology.find({ "category": "fewd" },  (err, technologies) => {
            res.json(technologies)
        })
    },
    bewd(req, res) {
        Technology.find({ "category": "bewd" },  (err, technologies) => {
            res.json(technologies)
        })
    }
}