var express = require('express');
var router = express.Router();

const JobSchema = require('../schemas/JobSchema');
const logger = require('../logger');

router
    .get('/data', async(req, res, next) => {
      await getData(req, res);
    })

    .get('/pdfs/:id', async (req, res, next) => {
      const pdfId = req.params.id;
      let pdf = '/home/me_sajied/Inspection/faculty-recruit-server/' +
          `job_circular/${pdfId}.pdf`;

      res.setHeader('Content-Type', 'application/pdf');
      res.sendFile(`${pdf}`);
    });

async function getData(req, res) {
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
