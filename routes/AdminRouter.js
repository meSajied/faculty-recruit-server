const express = require('express');
const router = express.Router();

const ApplicantSchema = require('../schemas/ApplicantSchema');
const JobSchema = require('../schemas/JobSchema');
const {Query} = require("../Query");
const {upload} = require("../multer_config");

router
    .post("/create-job-post", upload.single('file'),
        async(req, res, next) => {
          await new Query(req, res, JobSchema).createJobOpening();
        })

    .post("/delete-job-post", async(req, res, next) => {

    })

    .post("/change-applicant-password", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).changeApplicantPassword();
    })

    .post("/remove-applicant", async(req, res, next) => {
      await new Query(req, res, ApplicantSchema).removeApplicant();
    })

module.exports = router;
