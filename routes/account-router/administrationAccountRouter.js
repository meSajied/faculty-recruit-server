var express = require('express');
var router = express.Router();

const {AdministrationAccount} =
    require("../../account/AdministrationAccount");

/* Routers for applicant */
router
    .get("/login", (req, res, next) => {
      new AdministrationAccount(req, res).verifyAdministrationLogin();
    })

    .get("/logout", (req, res, next) => {
      new AdministrationAccount(req, res).logout();
    })

    .put("/changepass", (req, res, next) => {
      new AdministrationAccount(req, res).changePassword();
    })

module.exports = router;
