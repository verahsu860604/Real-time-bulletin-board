var express = require('express');
var router = express.Router();

var firebase = require("firebase/app");
var firestore = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAF4mGKn9ttUEuFlZOt-eecicjotNYf040",
  authDomain: "la-familia-11f85.firebaseapp.com",
  databaseURL: "https://la-familia-11f85.firebaseio.com",
  projectId: "la-familia-11f85",
  storageBucket: "la-familia-11f85.appspot.com",
  messagingSenderId: "124244911746",
  appId: "1:124244911746:web:57113f3c9e17e730b8769b",
  measurementId: "G-96CNH1KD64"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	let postRef = db.collection(req.params.id);
	let posts = []
	let allPosts = postRef.get()
	.then(snapshot => {
		snapshot.forEach(doc => {
			let data = doc.data()
			data['timestamp'] = doc.id
			posts.push(data)
		});
		res.send(posts);
	})
	.catch(err => {
		console.log('Error getting documents', err);
	})
});

module.exports = router;
