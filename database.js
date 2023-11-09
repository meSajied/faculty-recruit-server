const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('facultyrecruit', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;