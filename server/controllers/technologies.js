const dotenv = require('dotenv').load()

module.exports = {

    test: function (req, res, next) {
        res.json("this is a test")
    }
}