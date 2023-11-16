var express = require('express');
var router = express.Router();

const {Admin} = require("../../user/Admin");

router
    .post("/createapplicant", (req, res, next) => {
      new Admin(req, res).createApplicantAccount();
    })

    .post("/deleteapplicant", (req, res, next) => {
      new Admin(req, res).deleteApplicantAccount();
    })

    .post("/createreviewer", (req, res, next) => {
      new Admin(req, res).createReviewerAccount();
    })

    .post("/deletereviewer", (req, res, next) => {
      new Admin(req, res).deleteReviewerAccount();
    })

    .post("/createjobpost", (req, res, next) => {
      new Admin(req, res).createJobOpening();
    })

    .post("/deletejobpost", (req, res, next) => {
      new Admin(req, res).deleteJobOpening();
    })

module.exports = router;
