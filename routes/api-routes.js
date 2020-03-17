const express = require('express')
const Router = express.Router()

Router.get("/test", function(req, res){
    res.send("Test!!")
})


module.exports = Router