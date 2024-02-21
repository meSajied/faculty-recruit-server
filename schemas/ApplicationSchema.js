const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const ApplicationSchema = sequelize.define("Application", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },

  isRejected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: sequelize.literal('CASE WHEN "isRejected" = true THEN \'rejected\' ELSE \'processing\' END')
  },

  grantedByRegister: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'register_review'
  },

  grantedByDeputyRegister: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'deputy_register_review'
  }
});

module.exports = ApplicationSchema;