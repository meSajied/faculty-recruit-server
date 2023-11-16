const AdminSchema = require("../schemas/AdminSchema");
const {Account} = require("./Account");

function AdminAccount(req, res) {
  this.verifyLogin = async function() {
    await new Account(req, res, AdminSchema).verifyLogin();
  }

  this.logout = async function() {
    await new Account(req, res, AdminSchema).logout();
  }

  this.changePassword = async function() {
    await new Account(req, res, AdminSchema).changePassword();
  }
}

module.exports = {AdminAccount};