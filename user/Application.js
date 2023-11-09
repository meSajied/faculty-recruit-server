const {DataTypes} = require('sequelize');

const Applicant = require("./Applicant");
const Job = require("./Job");
const sequelize = require("../database");

const Application = sequelize
    .define("Application", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });

module.exports = Application;
