var express = require('express');
var router = express.Router();

const {ApplicantAccount} = require("../../account/ApplicantAccount");
const {ReviewerAccount} = require("../../account/ReviewerAccouunt");

/* Routers for applicant */
router.route('/applicant')
    .get((req, res, next) => {
      new ApplicantAccount(req, res).verifyLogin();
    })

    .post((req, res, next) => {
      new ApplicantAccount(req, res).createNewAccount();
    })

module.exports = router;
