const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const Reviewer = sequelize
    .define("Reviewer", {
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

      position: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });

module.exports = Reviewer;