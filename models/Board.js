const {sequelize} = require('../db');
const {Sequelize} = require('sequelize');

const Board = sequelize.define('Board', {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.INTEGER
});

module.exports = {Board};