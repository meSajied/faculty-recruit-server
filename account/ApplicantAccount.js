const ApplicantSchema = require("../schemas/ApplicantSchema");
const {Account} = require("./Account");

function ApplicantAccount(req, res, next) {
  this.verifyToken = async function() {
    await new Account(req, res, next, ApplicantSchema).verifyToken();
    next();
  }

  this.verifyLogin = async function() {
    await new Account(req, res, next, ApplicantSchema).verifyLogin();
    next();
  }

  this.createNewAccount = async function() {
    await new Account(req, res, next, ApplicantSchema).createNewAccount();
    next();
  }

  this.logout = async function() {
    await new Account(req, res, next, ApplicantSchema).logout();
    next();
  }

  this.changePassword = async function() {
    await new Account(req, res).changePassword();
    next();
  }
}

module.exports = {ApplicantAccount};