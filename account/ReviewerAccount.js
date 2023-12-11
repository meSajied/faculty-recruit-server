const AdministrationSchema = require("../schemas/AdministrationSchema");
const {Account} = require("./Query");

async function ReviewerAccount(req, res, next) {
  this.verifyToken = async function() {
    await new Account(req, res, AdministrationSchema).verifyToken();
  }

  this.verifyAdministrationLogin = async function() {
    await new Account(req, res, AdministrationSchema).verifyAdministrationLogin();
  }

  this.logout = async function() {
    await new Account(req, res, AdministrationSchema).logout();
  }

  this.changePassword = async function() {
    await new Account(req, res, AdministrationSchema).changePassword();
  }
}

module.exports = {ReviewerAccount};