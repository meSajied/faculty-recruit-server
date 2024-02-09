var express = require('express');
var router = express.Router();

const JobSchema = require('../schemas/JobSchema');
const logger = require('../logger');

router
    .get('/job', async(req, res, next) => {
      await getJobList(req, res);
    })

    .get('/pdfs/:id', async (req, res, next) => {
      const pdfId = req.params.id;
      let pdf = '/home/me_sajied/Inspection/faculty-recruit-server/' +
          `uploads/job_circular/${pdfId}.pdf`;

      res.sendFile(`${pdf}`, {
        headers: {
          'Content-Type': 'application/pdf'
        }
      });
    });

async function getJobList(req, res) {
  try {
    let jobList = await JobSchema.findAll().then((res) => {
      if(res == null) {
        return('No openings now');
      }else {
        return res;
      }
    });
    res.json(jobList);
  }catch(err) {
    logger.error(err);
  }
}

module.exports = router;
