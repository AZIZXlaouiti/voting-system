let express = require('express'),
    router = express.Router()

router.get('/', function(req , res){
    res.send('Home Static Page')
})

module.exports = router