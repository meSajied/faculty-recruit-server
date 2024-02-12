const {Sequelize} = require('sequelize-cockroachdb');

const sequelize = new Sequelize(process.env.DB_URL);

module.exports = sequelize;