const AdminSchema = require("../schemas/AdminSchema");
const {Account} = require("./Account");

function AdminAccount(req, res, next) {
  this.verifyLogin = async function() {
    await new Account(req, res, next, AdminSchema).verifyLogin();
    next();
  }

  this.logout = async function() {
    await new Account(req, res, next, AdminSchema).logout();
    next();
  }

  this.changePassword = async function() {
    await new Account(req, res, next, AdminSchema).changePassword();
    next();
  }
}

module.exports = {AdminAccount};