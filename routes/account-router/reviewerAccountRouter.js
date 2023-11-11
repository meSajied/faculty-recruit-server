var express = require('express');
var router = express.Router();

const {ReviewerAccount} =
    require("../../account/ReviewerAccount");

/* Routers for applicant */
router
    .get("/verify", (req, res, next) => {
      new ReviewerAccount(req, res).verifyToken();
    })

    .get("/login", (req, res, next) => {
      new ReviewerAccount(req, res).verifyLogin();
    })

    .get("/logout", (req, res, next) => {
      new ReviewerAccount(req, res).logout();
    })

    .put("/change-pass", (req, res, next) => {
      new ReviewerAccount(req, res).changePassword();
    })

module.exports = router;
