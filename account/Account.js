const logger = require("../logger");

function Account(req, res, schema) {
  this.verifyToken = async function() {
  }

  this.verifyLogin = async function() {
    try {
      let user = await tryVerifyLogin();
      res.json(user);
      logger.info("User verified");
    }catch (err) {
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
        return ("No user found");
      }else {
        return response;
      }
    })
  }

  this.createNewAccount = async function() {
    await tryCreateNewAccount();
  }

  async function tryCreateNewAccount() {
    try {
      await schema.create(req.body);
      res.json("Account created");
    }catch (err) {
      logger.error(err);
      res.json(err.errors[0].message);
    }
  }

  this.logout = async function() {

  }

  this.changePassword = async function() {
    await tryChangePassword();
  }

  async function tryChangePassword() {
    try {
      await schema.update({
        password: req.body.password
      }, {
        where: {
          id: req.body.id
        }
      });
      res.json("Password changed");
    }catch (err) {
      logger.error(err);
      res.json("Could not change password");
    }
  }

  this.delete = async function() {
    await tryDelete();
  }

  async function tryDelete() {
    try {
      await schema.destroy({
        where: {
          id: req.body.id,
          password: req.body.password
        }
      });
      res.json("Account deleted");
    }catch (err) {
      logger.error(err);
      res.json("Account could not be deleted");
    }
  }
}

module.exports = {Account};