const AdminSchema = require("./AdminSchema");
const ApplicantSchema = require("./ApplicantSchema");
const JobSchema = require("./JobSchema");
const ApplicationSchema = require("./ApplicationSchema");
const ReviewerSchema = require("./ReviewerSchema");

ApplicantSchema.hasMany(ApplicationSchema, {
  foreignKey: "applicantId"
});

JobSchema.hasMany(ApplicationSchema, {
  foreignKey: "jobId"
});


AdminSchema.sync();
ApplicationSchema.sync();
ApplicantSchema.sync();
JobSchema.sync();
ReviewerSchema.sync();
