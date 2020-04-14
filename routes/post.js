var express = require('express');
var router = express.Router();

router.get('/:groupName', function(req, res, next) {
  res.render('post', { 
  	title: req.params.groupName,
  	groupName: req.params.groupName });
});

module.exports = router;
