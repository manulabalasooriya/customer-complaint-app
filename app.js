var express = require('express')
var app = express()

// import controllers
var complaintController = require('./controllers/complaintController')

// set the view ejs view engine
app.set('view engine','ejs')

// static files
app.use(express.static('./public'))

// fire controllers
complaintController(app)

// listen to port 
app.listen(3000)
console.log('You are lisning to port 3000')



