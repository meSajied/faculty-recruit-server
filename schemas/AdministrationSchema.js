const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const AdministrationSchema = sequelize
    .define("Administration", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "user_name"
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

module.exports = AdministrationSchema;