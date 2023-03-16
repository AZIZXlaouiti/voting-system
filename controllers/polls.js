let express = require('express'),
    router = express.Router()

router.route('/')
    .get(function(req , res){
        // fetch polls
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
    