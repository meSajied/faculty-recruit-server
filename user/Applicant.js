const ApplicationSchema = require("../schemas/ApplicationSchema");
const logger = require("../logger");

function Applicant(req, res) {
  this.applyForJob = async function() {
    try {
      await ApplicationSchema.create(req.body);
      res.json('Application created');
    }catch (err) {
      res.json('Could not create application');
      logger.error(err);
    }
  }
}

module.exports = {Applicant}