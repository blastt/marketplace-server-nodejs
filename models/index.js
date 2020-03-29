const Sequelize = require('sequelize');

const Offer = require('./Offer');
const Game = require('./Game');
const User = require('./User');

Offer.belongsTo(Game);
Offer.belongsTo(User);

Game.hasMany(Offer, {
    as: 'offers',
    foreignKey: 'gameId'
});
User.hasMany(Offer, {
    as: 'offers',
    foreignKey: 'userId'
});

module.exports = {Offer, Game, User};