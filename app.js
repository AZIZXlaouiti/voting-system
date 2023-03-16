let express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    http = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/' , router)

app.get('/' , function(req , res){
    res.send('ok')
})

http.listen(3000, function(req , res){
    console.log('listening on port 3000')
})