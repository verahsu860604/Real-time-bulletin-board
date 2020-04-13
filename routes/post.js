var express = require('express');
var router = express.Router();

router.get('/:familyName', function(req, res, next) {
  res.render('post', { familyName: req.params.familyName });
});

module.exports = router;
