var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('bulletin', { 
		familyName: 'The House of Pilar',
		title: 'First post',
		content: 'hello',
		name: '阿肥',
		timestamp: '2/1' 
	});
});

module.exports = router;
