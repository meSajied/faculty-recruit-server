const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const Admin = sequelize
    .define("Admin", {
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
      }
    });

module.exports = Admin;