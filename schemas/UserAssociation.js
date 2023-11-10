require("./AdminSchema");
const ApplicantSchema = require("./ApplicantSchema");
const ApplicationSchema = require("./ApplicationSchema");
const Schema = require("./JobSchema");
require("./ReviewerSchema");

ApplicantSchema.hasMany(ApplicationSchema, {
  foreignKey: "applicantId"
});

Schema.hasMany(ApplicationSchema, {
  foreignKey: "jobId"
});

