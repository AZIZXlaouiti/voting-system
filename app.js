const { db } = require('rethinkdb')

let express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    http = require('http').Server(app)
    
let database = require('./models/db')

let r = new database()
   
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// telling app.js to use controller folder as the route
app.use(require('./controllers'))
r.setupDb()


http.listen(3000, function(req , res){
    console.log('listening on port 3000')
})
