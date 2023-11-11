var express = require('express');
var router = express.Router();

const {ApplicantAccount} =
    require("../../account/ApplicantAccount");

/* Routers for applicant */
router
    .get("/verify", (req, res, next) => {
      new ApplicantAccount(req, res).verifyToken();
    })

    .get("/login", (req, res, next) => {
      new ApplicantAccount(req, res).verifyLogin();
    })

    .post("/signup", (req, res, next) => {
      new ApplicantAccount(req, res).createNewAccount();
    })

    .get("/logout", (req, res, next) => {
      new ApplicantAccount(req, res).logout();
    })

    .put("/changepass", (req, res, next) => {
      new ApplicantAccount(req, res).changePassword();
    })

module.exports = router;
