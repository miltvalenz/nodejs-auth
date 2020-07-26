var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var createUser = require('./src/routes/users/create.user');
var detailsUser = require('./src/routes/users/details.user');
var deleteUser = require('./src/routes/users/delete.user');
var updateUser = require('./src/routes/users/update.user');

var app = express();

/**
 * Ititializations
 */
dotenv.config();
require('./src/db/database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//new routes 
const User = require('./src/models/user');
app.use('/users', createUser(User));
app.use('/users', detailsUser(User));
app.use('/users', deleteUser(User));
app.use('/users', updateUser(User));

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
