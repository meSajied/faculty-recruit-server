const AdministrationSchema = require("../schemas/AdministrationSchema");
const {Query} = require("../Query");

function AdministrationAccount(req, res) {
  this.verifyAdministrationLogin = async function() {
    await new Query(req, res, AdministrationSchema).verifyAdministrationLogin();
  }

  this.logout = async function() {
    await new Query(req, res, AdministrationSchema).logout();
  }

  this.changePassword = async function() {
    await new Query(req, res, AdministrationSchema).changePassword();
  }
}

module.exports = {AdministrationAccount};