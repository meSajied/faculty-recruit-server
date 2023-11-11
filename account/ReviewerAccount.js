const ReviewerSchema = require("../schemas/ReviewerSchema");
const {Account} = require("./Account");

async function ReviewerAccount(req, res, next) {
  this.verifyToken = async function() {
    await new Account(req, res, next, ReviewerSchema).verifyToken();
  }

  this.verifyLogin = async function() {
    await new Account(req, res, next, ReviewerSchema).verifyLogin();
  }

  this.logout = async function() {
    await new Account(req, res, next, ReviewerSchema).logout();
  }

  this.changePassword = async function() {
    await new Account(req, res, next, ReviewerAccount).changePassword();
  }
}

module.exports = {ReviewerAccount};