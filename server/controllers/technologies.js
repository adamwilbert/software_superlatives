const dotenv = require('dotenv').load()
const Technology = require("../models/technology")

module.exports = {

    fewd(req, res) {
        Technology.find({ "category": "fewd" }, function (err, technologies) {
            res.json(technologies)
        })
    },
    bewd(req, res) {
        res.json("bewd is bae")
    }
}