const dotenv = require('dotenv').load()
const rp = require('request-promise')

module.exports = {

    test: function (req, res, next) {
        res.json("testing")
    }
}