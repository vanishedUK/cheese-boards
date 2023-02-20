// Importing modules
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {User} = require('./User');

// Associations
User.hasMany(Board);
Board.belongsTo(User);

Board.belongsToMany(Cheese, { through: 'BoardCheese' });
Cheese.belongsToMany(Board, { through: 'BoardCheese' });

// Exporting modules
module.exports = {Board, Cheese, User};
