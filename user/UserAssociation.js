const Admin = require("./Admin");
const Applicant = require("./Applicant");
const Application = require("./Application");
const Job = require("./Job");
const Reviewer = require("./Reviewer");

Application.belongsTo(Applicant, {
  foreignKey: "applicantId"
});
Application.belongsTo(Job, {
  foreignKey: "jobId"
});
