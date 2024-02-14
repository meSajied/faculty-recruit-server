const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const ApplicantSchema = sequelize
    .define("Applicant", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name"
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name"
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      fathersName: {
        type: DataTypes.STRING,
        allowNull: true
      },

      mothersName: {
        type: DataTypes.STRING,
        allowNull: true
      },

      spouseName: {
        type: DataTypes.STRING,
        allowNull: true
      },

      birthDate: {
        type: DataTypes.STRING,
        allowNull: true
      },

      maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true
      },

      nationalIdNumber: {
        type: DataTypes.STRING,
        allowNull: true
      },

      currentAddress: {
        type: DataTypes.STRING,
        allowNull: true
      },

      mobile: {
        type: DataTypes.STRING,
        allowNull: true
      },

      permanentAddress: {
        type: DataTypes.STRING,
        allowNull: true
      },

      country: {
        type: DataTypes.STRING,
        allowNull: true
      },

      nationality: {
        type: DataTypes.STRING,
        allowNull: true
      },

      religion: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });

module.exports = ApplicantSchema;