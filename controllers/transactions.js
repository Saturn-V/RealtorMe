var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  res.send("Index")
})

router.get('/new', function(req, res) {
  res.render('transactions/new')
})

module.exports = router
