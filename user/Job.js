const {DataTypes} = require('sequelize');

const Application = require("./Application");
const sequelize = require("../database");

const Job = sequelize
    .define("Job", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      department: {
        type: DataTypes.STRING,
        allowNull: false
      },

      position: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

module.exports = Job;