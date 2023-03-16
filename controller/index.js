let express = require('express'),
    router = express.Router()

/**
  * @description
  * First route will handle the static html file delievery.
  * Second route will handle the API calls.
*/

router.use('/', require('./home')) // using home.js
router.use('/polls', require('./polls')) // using polls.js

module.exports = router