const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const ApplicantDetailsSchema = sequelize
    .define("ApplicantDetails", {
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

module.exports = ApplicantDetailsSchema;