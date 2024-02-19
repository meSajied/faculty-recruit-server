const logger = require("./logger");
const ApplicantSchema = require("./schemas/ApplicantSchema");
const JobSchema = require("./schemas/JobSchema");

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
        userName: req.body.userName,
        password: req.body.password
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
    }).then((user) => {
      return (user)
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

  this.fetchDetails = async function() {
    try {
      await schema.findOne({
        where: {
          id: req.query.id
        }
      }).then((user) => {
        res.json(user);
      })
    }catch(e) {
      logger.error(e);
    }
  }

  this.updateProfile = async function() {
    try {
      schema.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fathersName: req.body.fathersName,
        mothersName: req.body.mothersName,
        spouseName: req.body.spouseName,
        birthDate: req.body.birthDate,
        maritalStatus: req.body.maritalStatus,
        nationalIdNumber: req.body.nationalIdNumber,
        currentAddress: req.body.currentAddress,
        mobile: req.body.mobile,
        email: req.body.email,
        permanentAddress: req.body.permanentAddress,
        country: req.body.country,
        nationality: req.body.nationality,
        religion: req.body.religion,
      },{
        where: {
          id: req.body.id
        }
      }).then(() => {
        res.json({msg: "OK"})
      })
    }catch(e) {
      logger.error(e);
    }
  }

  this.changePassword = async function() {
    await tryChangePassword();
  }

  async function tryChangePassword() {
    try {
      await schema.update({
        password: req.body.newPassword
      }, {
        where: {
          id: req.body.id,
          password: req.body.oldPassword
        }
      }).then(() => {
        res.json({msg: "OK"})
      })
    }catch(e) {
      logger.error(e);
    }
  }

  this.deleteAccount = async function() {
    await tryDelete();
  }

  async function tryDelete() {
    try {
      await schema.destroy({
        where: {
          id: req.body.id,
          password: req.body.password
        }
      }).then(() => {
        res.json({msg: "OK"})
      });

    }catch (err) {
      logger.error(err);
    }
  }

  this.applications = async function() {
    try {
      await schema.findAll({
        where: {
          applicantId: req.body.id
        },
        include: [
      {
        model: ApplicantSchema
      },
      {
        model: JobSchema
      }
    ]
      }).then((applications) => {
        res.json(applications);
      })
    }catch(e) {
      logger.error(e);
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
          .then(() => {
            res.json({msg: "OK"})
          });
    }catch (err) {
      logger.error(err);
    }
  }
}

module.exports = {Query};