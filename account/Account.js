const logger = require("../logger");

function Account(req, res, next, schema) {
  this.verifyToken = async function() {
    next();
  }

  this.verifyLogin = async function() {
    try {
      let user = await tryVerifyLogin();
      res.json(user);
      logger.info("User verified");
      return next();
    }catch(err) {
      logger.error(err);
      res.json("Could not verify login");
      return next();
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
      await tryCreateNewAccount();
      logger.info("New applicant account created");
      res.json("account created");
      return next();
    } catch (err) {
      logger.error(err);
      res.json("Could not create account");
      return next();
    }
  }

  async function tryCreateNewAccount() {
    return await schema.create(req.body);
  }

  this.logout = async function() {
    next();
  }

  this.changePassword = async function() {
    let user = await schema.findByPk(req.body.id);

    if(user != null) {
      await tryChangePassword();
      res.json("Password updated");
      return next();
    }else {
      res.json("Could not update password");
      return next();
    }
  }

  async function tryChangePassword() {
    try {
      await schema.update({
        password: req.body.password
      }, {
        where: {
          id: req.body.id
        }
      }).save();
      res.json("Password changed");
      return next();
    }catch (err) {
      logger.error(err);
      res.json("Could not change password");
      return next();
    }
  }
}

module.exports = {Account};