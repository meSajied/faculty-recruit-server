const uuid = require("uuid");

const ApplicantSchema = require("../schemas/ApplicantSchema");
const logger = require("../logger");

function ApplicantAccount(req, res) {
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
    return await ApplicantSchema.findOne({
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
    return await ApplicantSchema.create(req.body);
  }
}

module.exports = {ApplicantAccount};