const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.sequelize.define(
  'category',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  }
);