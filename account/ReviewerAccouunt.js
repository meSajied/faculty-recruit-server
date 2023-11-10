const ReviewerSchema = require("../schemas/ReviewerSchema");

function ReviewerAccount(req, res) {
  this.verifyLogin = async function() {
    const user = await ReviewerSchema.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    }).then((response) => {
      if(response == null) {
        return ("No user found");
      }

      return response;
    })

    res.json(user);
  }
}

module.exports = {ReviewerAccount};