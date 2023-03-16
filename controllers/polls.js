let express = require('express'),
    router = express.Router()

router.route('/')
    .get(function(req , res){
        // fetch polls
        res.send('Handling polls logic')
    })
    .post(function(req , res){
        // add new poll
    })
    .put(function(req , res){
        // update poll's vote
    })
    .delete(function(req , res){
        // clear the poll
    })

// module.exports is required for the app to recognize polls.js as a router     
module.exports = router 