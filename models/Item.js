const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.sequelize.define(
  'item',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    date_received: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    exp_date: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  }
);