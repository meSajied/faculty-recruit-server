var express = require('express');
var router = express.Router();

const {AdminAccount} =
    require("../../account/AdminAccount");

/* Routers for applicant */
router.all("/admin")
    .get("/login", (req, res, next) => {
      new AdminAccount(req, res).verifyLogin();
    })

    .get("/logout", (req, res, next) => {
      new AdminAccount(req, res).logout();
    })

    .put("/change-pass", (req, res, next) => {
      new AdminAccount(req, res).changePassword();
    })

module.exports = router;
