const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const JobSchema = sequelize
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

      summary: {
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
      },

      advertised: {
        type: DataTypes.STRING,
        allowNull: false
      },

      deadline: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

module.exports = JobSchema;