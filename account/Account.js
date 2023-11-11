const logger = require("../logger");
function Account(req, res, schema) {
  this.verifyToken = async function() {

  }

  this.verifyLogin = async function() {
    try {
      let user = await tryVerifyLogin();
      res.json(user);
      logger.info("User verified");
    }catch(err) {
      logger.error(err.parent.sqlMessage);
      res.json(err.parent.sqlMessage);
    }
  }

  async function tryVerifyLogin() {
    return await schema.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then((response) => {
      if(response == null) {
        return("No user found");
      }
    })
  }

  this.createNewAccount = async function() {
    try {
      let account = await tryCreateNewAccount();
      logger.info("New applicant account created");
      res.json(account);
    } catch (err) {
      logger.error(err.parent.sqlMessage);
      res.json(err.parent.sqlMessage);
    }
  }

  async function tryCreateNewAccount() {
    return await schema.create(req.body);
  }

  this.logout = async function() {

  }

  this.changePassword = async function() {

  }
}

module.exports = {Account};