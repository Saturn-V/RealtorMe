var express = require('express') // Our web server
var app = express() // Instance of web server
var exphbs = require('express-handlebars') // Our templating engine
var mongoose = require('mongoose')
var db = mongoose.connection
var bodyParser = require('body-parser')

// Express setup
app.use('/', express.static(__dirname + '/public'))

// Templating Engine setup
app.engine('handlebars', exphbs({ defaultLayout: 'application' }))
app.set('view engine', 'handlebars')

// Routes
app.get('/', function(req, res) {
  res.render('pages/home')
})

// Resourced Routes
var transactionsCtrl = require('./controllers/transactions')
app.use('/transactions', transactionsCtrl)

// Listen for port
var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Base app listening at ' + port)
})
