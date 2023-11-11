const logger = require("../logger");

function Account(req, res, schema) {
  this.verifyToken = async function() {
    next();
  }

  this.verifyLogin = async function() {
    try {
      let user = await tryVerifyLogin();
      res.json(user);
      logger.info("User verified");
    }catch(err) {
      logger.error(err);
      res.json("Could not verify login");
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
      }else {
        return response;
      }
    })
  }

  this.createNewAccount = async function() {
    try {
      await tryCreateNewAccount();
      logger.info("New applicant account created");
      res.json("account created");
    } catch (err) {
      logger.error(err);
      res.json(err.errors[0].message);
    }
  }

  async function tryCreateNewAccount() {
    return await schema.create(req.body);
  }

  this.logout = async function() {
    
  }

  this.changePassword = async function() {
    let user = await schema.findByPk(req.body.id);

    if(user != null) {
      await tryChangePassword();
      res.json("Password updated");
    }else {
      res.json("Could not update password");
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
    }catch (err) {
      logger.error(err);
      res.json("Could not change password");
    }
  }
}

module.exports = {Account};