const {Account} = require("../account/Account");

const ApplicantSchema = require('../schemas/ApplicantSchema');
const JobSchema = require('../schemas/JobSchema');
const ReviewSchema = require('../schemas/ReviewerSchema');

const logger = require('../logger');

function Admin(req, res) {
  this.createApplicantAccount = function() {
    new Account(req, res, ApplicantSchema).create();
  }

  this.deleteApplicantAccount = function() {
    new Account(req, res, ApplicantSchema).delete();
  }

  this.createReviewerAccount = function() {
    new Account(req, res, ReviewSchema).create();
  }

  this.deleteReviewerAccount = function() {
    new Account(req, res, ReviewSchema).delete();
  }

  this.createJobOpening = async function() {
    try {
      await JobSchema.create(req.body);
      res.json('Job opening created');
    }catch(err) {
      res.json('Could not create ob opening');
      logger.error(err);
    }
  }

  this.deleteJobOpening = async function() {
    try {
      await JobSchema.destroy(req.body);
      res.json('Job opening deleted');
    }catch (err) {
      res.json('Could not delete ob opening');
      logger.error(err);
    }
  }
}

module.exports = {Admin}