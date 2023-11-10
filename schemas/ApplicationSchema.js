const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const ApplicationSchema = sequelize
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

      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

module.exports = ApplicationSchema;
