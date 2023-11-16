var express = require('express');
var router = express.Router();

const {Reviewer: ReviewerRouter} = require("../../user/Reviewer");

router
    .put("/approveapplication", (req, res, next) => {
      new ReviewerRouter(req, res).approveApplication();
    })

module.exports = router;
