const {DataTypes} = require('sequelize');

const sequelize = require("../database");

const ApplicationSchema = sequelize.define('Application', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  isRejected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  register_review: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  deputy_register_review: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  jobId: {
    type: DataTypes.UUID,
    references: {
      model: 'Jobs',
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  applicantId: {
    type: DataTypes.UUID,
    references: {
      model: 'Applicants',
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
}, {
  hooks: {
    beforeSave: (application) => {
      application.status = application.isRejected ? 'rejected' : 'processing';
    },
  },
});

module.exports = ApplicationSchema;
