var express = require('express');
var router = express.Router();

const JobSchema = require('../../schemas/JobSchema');
const {Query} = require("../../Query");
const {upload} = require("../../multer_config");

router
    .post("/createjobpost", upload.single('file'),
        async(req, res, next) => {
      await new Query(req, res, JobSchema).applyForJob();
    })

    .post("/deletejobpost", async(req, res, next) => {

    })

module.exports = router;
