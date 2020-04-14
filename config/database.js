const Sequelize = require('sequelize');
const OfferModel = require('../models/Offer');
const UserModel = require('../models/User');
const GameModel = require('../models/Game');
const ImageModel = require('../models/Image');

const sequelize = new Sequelize('mydb', 'postgres', 'dijid82adssa', {
    host: 'localhost',
    dialect: 'postgres',
});

const Offer = OfferModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);
const Image = ImageModel(sequelize, Sequelize);

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

sequelize.sync({ alter: true }) 
  .then(() => {
    console.log(`Database & tables created!`)
});

module.exports = {
    Offer,
    User,
    Game,
    Image
}