var express = require('express');
var router = express.Router();
const path = require("path");

const JobSchema = require('../schemas/JobSchema');
const logger = require('../logger');

const pdfpath = path.resolve(__dirname + "/../uploads/job_circular")

router
    .get('/job', async(req, res, next) => {
      await getJobList(req, res);
    })

    .get('/pdfs/:id', async (req, res, next) => {
      const pdfId = req.params.id;
      let pdf = pdfpath + `/${pdfId}.pdf`;

      res.sendFile(`${pdf}`, {
        headers: {
          'Content-Type': 'application/pdf'
        }
      });
    });

async function getJobList(req, res) {
  try {
    let jobList = await JobSchema.findAll();
    res.json(jobList);
  }catch(err) {
    logger.error(err);
  }
}

module.exports = router;
