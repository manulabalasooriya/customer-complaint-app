var express = require('express')
var app = express()

// set the view ejs view engine
app.set('view engine','ejs')


// static files
app.use(express.static('./public'))

// listen to port 
app.listen(3000)
console.log('You are lisning to port 3000')
