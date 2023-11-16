var express = require('express');
var router = express.Router();

const {Applicant} = require("../../user/Applicant");

/* Routers for applicant */
router
    .post("/applyforjob", (req, res, next) => {
      new Applicant(req.res).applyForJob();
    })

module.exports = router;
