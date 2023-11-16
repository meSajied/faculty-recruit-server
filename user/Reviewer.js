const ApplicationSchema = require("../schemas/ApplicationSchema");
const logger = require("../logger");

function Reviewer(req, res) {
  this.approveApplication = async function() {
    try {
      if(req.body.position === 'register') {
        await ApplicationSchema.update({
          grantedByRegister: true
        }, {
          where: {
            id: req.body.id
          }
        });
        res.json('Application created');
      }else if(req.body.position === 'deputy_register') {
        await ApplicationSchema.update({
          grantedByDeputyRegisterRegister: true
        }, {
          where: {
            id: req.body.id
          }
        });
        res.json('Application created');
      }
    }catch (err) {
      res.json('Could not create application');
      logger.error(err);
    }
  }
}

module.exports = {Reviewer}