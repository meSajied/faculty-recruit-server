const createError = require('http-errors');
const cors = require("cors");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

require("./database");
require("./schemas/UserAssociation");

const JobRouter = require('./routes/JobRouter');

const AdminRouter =
    require('./routes/AdminRouter');
const ApplicantRouter =
    require('./routes/ApplicantRouter');
const ReviewerRouter =
    require('./routes/ReviewerRouter');

const app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {title: 'Hello, World!'});
});

app.use('/', JobRouter);

app.use('/admin', AdminRouter);
app.use('/applicant', ApplicantRouter);
app.use('/reviewer', ReviewerRouter);

const {log} = require("debug");

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
