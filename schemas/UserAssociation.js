const AdminSchema = require("./AdminSchema");
const ApplicantSchema = require("./ApplicantSchema");
const ApplicationSchema = require("./ApplicationSchema");
const JobSchema = require("./JobSchema");
const ReviewerSchema = require("./ReviewerSchema");

ApplicantSchema.hasMany(ApplicationSchema, {
  foreignKey: "applicantId"
});

JobSchema.hasMany(ApplicationSchema, {
  foreignKey: "jobId"
});

AdminSchema.sync();
ApplicantSchema.sync();
ApplicationSchema.sync();
JobSchema.sync();
ReviewerSchema.sync();
