const Sequelize = require('sequelize');

const Offer = require('./Offer');
const Game = require('./Game');
const User = require('./User');
const Image = require('./Image');

Offer.belongsTo(Game);
Offer.belongsTo(User);
Image.belongsTo(Offer);

Game.hasMany(Offer, {
    as: 'offers',
    foreignKey: 'gameId'
});
User.hasMany(Offer, {
    as: 'offers',
    foreignKey: 'userId'
});
Offer.hasMany(Image, {
    as: 'images',
    foreignKey: "offerId"
});

module.exports = {Offer, Game, User};