var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var groupName;

// router.get('/', function(req, res, next) {
// 	console.log('bulletin get')
// 	res.render('bulletin', { 
// 		familyName: req.params.familyName,
// 	});
// });

router.post('/', urlencodedParser,  function(req, res) {
	let data = JSON.parse(JSON.stringify(res.req.body))
	groupName = data['name']
	res.render('bulletin', {
		groupName: groupName
	})
})

module.exports = router;
