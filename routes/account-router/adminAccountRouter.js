var express = require('express');
var router = express.Router();

const {AdminAccount} =
    require("../../account/AdminAccount");

/* Routers for applicant */
router.all("/admin")
    .get("/login", (req, res, next) => {
      new AdminAccount(req, res, next).verifyLogin();
      next();
    })

    .get("/logout", (req, res, next) => {
      new AdminAccount(req, res, next).logout();
      next();
    })

    .put("/change-pass", (req, res, next) => {
      new AdminAccount(req, res, next).changePassword();
      next();
    })

module.exports = router;
