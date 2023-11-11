var express = require('express');
var router = express.Router();

const {ReviewerAccount} =
    require("../../account/ReviewerAccount");

/* Routers for applicant */
router.all("/reviewer")
    .get("/verify", (req, res, next) => {
      new ReviewerAccount(req, res, next).verifyToken();
      next();
    })

    .get("/login", (req, res, next) => {
      new ReviewerAccount(req, res, next).verifyLogin();
      next();
    })

    .get("/logout", (req, res, next) => {
      new ReviewerAccount(req, res, next).logout();
      next();
    })

    .put("/change-pass", (req, res, next) => {
      new ReviewerAccount(req, res, next).changePassword();
      next();
    })

module.exports = router;
