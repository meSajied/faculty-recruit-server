const AdminSchema = require("./AdminSchema");
const ApplicantSchema = require("./ApplicantSchema");
const JobSchema = require("./JobSchema");
const ApplicationSchema = require("./ApplicationSchema");
const ReviewerSchema = require("./ReviewerSchema");

ApplicationSchema.belongsTo(JobSchema, {
  foreignKey: "jobId"
});
ApplicationSchema.belongsTo(ApplicantSchema, {
  foreignKey: "applicantId"
});


AdminSchema.sync();
ApplicationSchema.sync();
ApplicantSchema.sync();
JobSchema.sync();
ReviewerSchema.sync();
