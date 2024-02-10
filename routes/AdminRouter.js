const express = require('express');
const router = express.Router();

const AdminSchema = require('../schemas/AdminSchema');
const ApplicantSchema = require('../schemas/ApplicantSchema');
const JobSchema = require('../schemas/JobSchema');
const {Query} = require("../Query");
const {upload} = require("../multer_config");

router
    .post("/login", async(req, res, next) => {
      await new Query(req, res, AdminSchema).verifyAdminLogin();
    })

    .post("/create-job-post", upload.single('file'),
        async(req, res, next) => {
          await new Query(req, res, JobSchema).createJobOpening();
        })

    .post("/delete-job-post", async(req, res, next) => {
      await new Query(req, res, JobSchema).deleteJobOpening();
    })

    .post("/change-applicant-password", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).changePassword();
    })

    .post("/change-password", async(req, res, next) => {
      await new Query(req, res, AdminSchema).changeAdminPassword();
    })

module.exports = router;
