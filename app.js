var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var indexRouter = require('./routes/index');
var bulletinRouter = require('./routes/bulletin');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');

// notes: app getting started
var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var firebase = require("firebase/app");
var firestore = require("firebase/firestore");
var db = firebase.firestore();

app.post('/newpost/:groupName', urlencodedParser, function (req, res) {
    let groupName = req.params.groupName
    let data = JSON.parse(JSON.stringify(req.body))
    let setDoc = db.collection(groupName).doc(Date.now().toString()).set(data);
    res.render('bulletin', {
      groupName: groupName
    })
})

// notes: routes
app.use('/', indexRouter);
app.use('/bulletin', bulletinRouter, urlencodedParser);
app.use('/users', usersRouter);
app.use('/post', postRouter, urlencodedParser);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
