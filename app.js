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

/**
 * 250g smid arteb
 * 250g smid metwaset
 * 125g farina
 * 200g zebda
 * 50g huile vegetale
 * chwaya 5mira
 * repos ~ 30 min
 * farce 
 * - tarf thom / bsal 
 * - tebel / korkom 
 * - jben + l7am
 * - bel l7raf bel me
 */