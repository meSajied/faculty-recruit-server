var express = require('express');
var router = express.Router();

const {ApplicantAccount} =
    require("../../account/ApplicantAccount");

/* Routers for applicant */
router.all("/applicant")
    .get("/verify", (req, res, next) => {
      new ApplicantAccount(req, res, next).verifyToken();
      next();
    })

    .get("/login", (req, res, next) => {
      new ApplicantAccount(req, res, next).verifyLogin();
      next();
    })

    .post("/signup", (req, res, next) => {
      new ApplicantAccount(req, res, next).createNewAccount();
      next();
    })

    .get("/logout", (req, res, next) => {
      new ApplicantAccount(req, res, next).logout();
      next();
    })

    .put("/changepass", (req, res, next) => {
      new ApplicantAccount(req, res, next).changePassword();
      next();
    })

module.exports = router;
