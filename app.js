const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('dotenv').config();

require("./database");
require("./schemas/UserAssociation");

const homeRouter = require('./routes/HomeRouter');

const AdministrationAccountRouter =
    require('./routes/account-router/administrationAccountRouter');
const applicantAccountRouter =
    require('./routes/account-router/applicantAccountRouter');
const reviewerAccountRouter =
    require('./routes/account-router/reviewerAccountRouter');

const adminRouter = require('./routes/user-router/AdminRouter');
const applicantRouter = require('./routes/user-router/ApplicantRouter');
const reviewerRouter = require('./routes/user-router/ReviewerRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/homepage', homeRouter);

app.use('/account/administration', AdministrationAccountRouter);
app.use('/account/applicant', applicantAccountRouter);
app.use('/account/reviewer', reviewerAccountRouter);

app.use('/user/admin', adminRouter);
app.use('/user/applicant', applicantRouter);
app.use('/user/reviewer', reviewerRouter);

require("./schemas/UserAssociation");
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
