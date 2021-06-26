const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// Require the needed functions

const app = express();

const config = require("config");

const cors = require("cors");

const port = 3000

const checkout = require('./routes/checkout');
app.use('/checkout', checkout);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use("/users/" , require("./routes/usersRoute"))


// Add the Scotch author profile route

app.get('/scotch/:author', (req, res, next) => {
  // res.send('scotch')
  const author = req.params.author;
  sendResponse(res)(fetchAuthorProfile(author));
});



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
