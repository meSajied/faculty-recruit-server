var express = require('express');
const {Query} = require("../../Query");
const ApplicantSchema = require('../../schemas/ApplicantSchema');
var router = express.Router();

/* Routers for applicant */
router
    .post("/applyforjob", (req, res, next) => {
      new Query(req.res, ApplicantSchema).applyForJob();
    })

module.exports = router;
