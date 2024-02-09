const express = require('express');
const router = express.Router();

const ApplicantSchema = require("../schemas/ApplicantSchema");
const {Query} =
    require("../Query");

router
    .post("/login", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).verifyLogin();
    })

    .post("/signup", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).createAccount();
    })

    .post("/logout", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).logout();
    })

    .post("/change-password", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).changePassword();
    })

    .post("/delete", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).delete();
    })

module.exports = router;
