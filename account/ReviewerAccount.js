const ReviewerSchema = require("../schemas/ReviewerSchema");
const {Account} = require("./Account");

async function ReviewerAccount(req, res) {
  this.verifyToken = async function() {
    await new Account(req, res, ReviewerSchema).verifyToken();
  }

  this.verifyLogin = async function() {
    await new Account(req, res, ReviewerSchema).verifyLogin();
  }

  this.logout = async function() {
    await new Account(req, res, ReviewerSchema).logout();
  }

  this.changePassword = async function() {
    await new Account(req, res, ReviewerAccount).changePassword();
  }
}

module.exports = {ReviewerAccount};