const ApplicantSchema = require("../schemas/ApplicantSchema");
const {Account} = require("./Account");

function ApplicantAccount(req, res) {
  this.verifyToken = async function() {
    await new Account(req, res, ApplicantSchema).verifyToken();
  }

  this.verifyLogin = async function() {
    await new Account(req, res, ApplicantSchema).verifyLogin();
  }

  this.createNewAccount = async function() {
    await new Account(req, res, ApplicantSchema).createNewAccount();
  }

  this.logout = async function() {
    await new Account(req, res, ApplicantSchema).logout();
  }

  this.changePassword = async function() {
    await new Account(req, res, ApplicantSchema).changePassword();
  }
}

module.exports = {ApplicantAccount};