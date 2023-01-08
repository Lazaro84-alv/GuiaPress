const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories',{
  title:{
    type: Sequelize.STRING,
    allowNull: false
  }, slug: { // enderenço da categoria
    type: Sequelize.STRING,
    allowNull: false
  }
})

Category.sync({force: false});

module.exports = Category;