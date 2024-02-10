const logger = require("./logger");

function Query(req, res, schema) {
  this.verifyAdminLogin = async function() {
    try {
      let user = await tryVerifyAdminLogin();
      res.json(user);
      logger.info("User verified");
    }catch (err) {
      logger.error(err);
      res.json("Could not verify you");
    }
  }

  async function tryVerifyAdminLogin() {
    return await schema.findOne({
      where: {
        userName: req.body.username,
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

  this.changeAdminPassword = async function() {
    try {
      await schema.update({
        password: req.body.newPassword
      }, {
        where: {
          userName: req.body.userName,
          password: req.body.oldPassword
        }
      }).then(() => {
        res.json({msg: "OK"})
      })
    }catch(e) {
      logger.error(e);
    }
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
    })
  }

  this.createAccount = async function() {
    await tryCreateAccount();
  }

  async function tryCreateAccount() {
    try {
      await schema.create(req.body)
      .then(() => {
        res.json(req.body);
      })
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
          email: req.body.email
        }
      }).then(() => {
        res.json({msg: "OK"})
      })
    }catch(e) {
      logger.error(e);
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
      }).then(res.json("Query deleted"));

    }catch (err) {
      logger.error(err);
      res.json("Query could not be deleted");
    }
  }

  this.createJobOpening = async function() {
    try {
      await schema.create(req.body).then(() => {
        res.json({msg: "OK"});
      })
    }catch(err) {
      logger.error(err);
    }
  }

  this.deleteJobOpening = async function() {
    try {
      await schema.create(req.body, {
        where: {
          title: req.body.title,
          department: req.body.department,
          position: req.body.position
        }
      }).then(() => {
        res.json({msg: "OK"});
      })
    }catch(err) {
      logger.error(err);
    }
  }

  this.applyForJob = async function() {
    try {
      await schema.create(req.body)
          .then(res.json('Application created'));
    }catch (err) {
      res.json('Could not create application');
      logger.error(err);
    }
  }
}

module.exports = {Query};