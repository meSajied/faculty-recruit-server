const ApplicantSchema = require("../schemas/ApplicantSchema");
const {Query} = require("../Query");

function ApplicantAccount(req, res) {
  this.verifyToken = async function() {
    await new Query(req, res, ApplicantSchema).verifyToken();
  }

  this.verifyLogin = async function() {
    await new Query(req, res, ApplicantSchema).verifyLogin();
  }

  this.createNewAccount = async function() {
    await new Query(req, res, ApplicantSchema).create();
  }

  this.logout = async function() {
    await new Query(req, res, ApplicantSchema).logout();
  }

  this.changePassword = async function() {
    await new Query(req, res, ApplicantSchema).changePassword();
  }

  this.delete = async function() {
    await new Query(req, res, ApplicantSchema).delete();
  }
}

module.exports = {ApplicantAccount};