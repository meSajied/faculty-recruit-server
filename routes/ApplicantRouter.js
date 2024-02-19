const express = require('express');
const router = express.Router();

const ApplicantSchema = require("../schemas/ApplicantSchema");
const ApplicationSchema = require("../schemas/ApplicationSchema");
const {Query} = require("../Query");
const { uploadMultiple } = require('../multer_config');
const logger = require('../logger');

router
    .post("/login", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).verifyLogin();
    })

    .post("/signup", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).createAccount();
    })

    .get("/fetch-details", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).fetchDetails();
    })

    .post("/update-profile", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).updateProfile();
    })

    .post("/apply-for-job", uploadMultiple.fields([
      {name: "photo", maxCount: 1},
      {name: "transcript", maxCount: 1},
      {name: "nationalId", maxCount: 1},
      {name: "mcir", maxCount: 1},
    ]), async(req, res, next) => {
      await new Query(req, res, ApplicationSchema).applyForJob();
    })

    .post("/logout", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).logout();
    })

    .post("/applications", async(req, res, next) => {
      await new Query(req, res, ApplicationSchema).applications();
    })

    .post("/change-password", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).changePassword();
    })

    .post("/delete-account", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).deleteAccount();
    })

module.exports = router;
