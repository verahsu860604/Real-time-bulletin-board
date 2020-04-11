var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

// notes: routes
app.use('/', indexRouter);
app.use('/bulletin', bulletinRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/newpost', upload.array(), function (req, res) {

  	res.send('welcome, ' + req)
  	console.log(req)
})

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

app.route('/post')
 	.get(function (req, res) {
 		console.log('fuck')
		res.sendFile(path + '/public/data.html');
	});

module.exports = app;
