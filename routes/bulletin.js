var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var familyName;

// router.get('/', function(req, res, next) {
// 	console.log('bulletin get')
// 	res.render('bulletin', { 
// 		familyName: req.params.familyName,
// 	});
// });

router.post('/', urlencodedParser,  function(req, res) {
	let data = JSON.parse(JSON.stringify(res.req.body))
	familyName = data['name']
	res.render('bulletin', {
		familyName: familyName
	})
})

module.exports = router;
