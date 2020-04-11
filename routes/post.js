var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post', { familyName: 'The House of Pilar' });
});

module.exports = router;
