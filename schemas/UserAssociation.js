const AdminSchema = require("./AdminSchema");
const ApplicantSchema = require("./ApplicantSchema");
const ApplicantDetailsSchema = require("./ApplicantDetailsSchema");
const JobSchema = require("./JobSchema");
const ApplicationSchema = require("./ApplicationSchema");
const ReviewerSchema = require("./ReviewerSchema");

ApplicantSchema.hasMany(ApplicationSchema, {
  foreignKey: "applicantId"
});

ApplicantSchema.hasOne(ApplicantDetailsSchema, {
  foreignKey: "applicantId"
});

JobSchema.hasMany(ApplicationSchema, {
  foreignKey: "jobId"
});


AdminSchema.sync();
ApplicationSchema.sync();
ApplicantDetailsSchema.sync();
ApplicantSchema.sync();
JobSchema.sync();
ReviewerSchema.sync();
