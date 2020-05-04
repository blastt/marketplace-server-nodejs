const Sequelize = require('sequelize');
const OfferModel = require('../models/Offer');
const UserModel = require('../models/User');
const GameModel = require('../models/Game');
const ImageModel = require('../models/Image');
const OfferGameModel = require('../models/OfferGame');
const OrderModel = require('../models/Order');

const sequelize = new Sequelize('db_development', 'postgres', 'dijid82adssa', {
    host: 'localhost',
    dialect: 'postgres',
});

const Offer = OfferModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);
const Image = ImageModel(sequelize, Sequelize);
const OfferGame = OfferGameModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize)

Offer.belongsToMany(Game, { through: { model: OfferGame }});
Game.belongsToMany(Offer, { through: { model: OfferGame }});
// OfferGame.belongsTo(Offer);
// OfferGame.belongsTo(Game);
// Offer.hasMany(OfferGame);
// Game.hasMany(OfferGame);
Offer.belongsTo(User);
Image.belongsTo(Offer);
Offer.hasOne(Order, {
    foreignKey: {
      allowNull: false
    }
  });
Order.belongsTo(Offer);



User.hasMany(Offer, {
    as: 'offers',
    foreignKey: 'userId'
});

Offer.hasMany(Image, {
    as: 'images',
    foreignKey: "offerId"
});


let users = [
    {
        //id: 1,
        username: 'user1',
        email: 'example@mail.dd',
        login: 'user',
        password: '1234'
    }
]

const gameCsgo = {
    //id: 1,
    name: "CS:GO",
    value: "csgo",
    rank: 1
};

const gameDota2 = {
    //id: 2,
    name: "Dota 2",
    value: "dota2",
    rank: 2
}

const gameValorant = {
    //id: 3,
    name: "Valorant",
    value: "valorant",
    rank: 3
}

const gamePulyaDura = {
    //id: 4,
    name: "Pulya Dura",
    value: "pulyadura",
    rank: 4

}

let games = [gameCsgo, gameDota2, gameValorant, gamePulyaDura];

let offers = [

    {
        //id: 1,
        header: 'CS:GO Account',
        description: 'Descr',
        accountLogin: 'example',
        sellerPaysCharge: true,
        accountCreatedDate: new Date(),
        price: 1050,
        userId: 1
    },
    {
        //id: 2,
        header: 'CS:GO Account LEM',
        description: 'Descr2',
        accountLogin: 'example2',
        sellerPaysCharge: false,
        accountCreatedDate: new Date(),
        price: 700,
        userId: 1
    },
    {
        //id: 3,
        header: 'CS:GO Account Global',
        description: 'Descr',
        accountLogin: 'example',
        sellerPaysCharge: true,
        accountCreatedDate: new Date(),
        price: 890,
        userId: 1
    },
    {
        //id: 4,
        header: 'cs go account',
        description: 'Descr',
        accountLogin: 'example',
        sellerPaysCharge: true,
        accountCreatedDate: new Date(),
        price: 1200,
        userId: 1
    },
    {
        //id: 5,
        header: 'dota 2 7k mmr',
        description: 'Descr',
        accountLogin: 'example',
        sellerPaysCharge: true,
        accountCreatedDate: new Date(),
        price: 1000,
        userId: 1
    },
    {
        //id: 6,
        header: 'Valorant',
        description: 'Descr2',
        accountLogin: 'example',
        sellerPaysCharge: true,
        accountCreatedDate: new Date(),
        price: 1300,
        userId: 1
    },
    {
        //id: 7,
        header: 'Pulya dura',
        description: 'Descr254',
        accountLogin: 'example22',
        sellerPaysCharge: true,
        accountCreatedDate: new Date(),
        price: 1100,
        userId: 1
    }
]

sequelize.sync({ alter: true, force: true })
    .then((data) => Game.bulkCreate(games))
    .then((data) => User.bulkCreate(users))
    .then((data) => Offer.bulkCreate(offers))     
    .then((data) => OfferGame.bulkCreate([
        { offerId: 1, gameId: 1 },
        { offerId: 1, gameId: 2 },
        { offerId: 2, gameId: 1 },
        { offerId: 3, gameId: 3 },
        { offerId: 4, gameId: 1 },
        { offerId: 4, gameId: 4 },
        { offerId: 5, gameId: 1 },
        { offerId: 5, gameId: 2 },
        { offerId: 5, gameId: 3 },
        { offerId: 6, gameId: 1 },
        { offerId: 7, gameId: 3 }
    ]))    
    .then((data) => console.log('games seed created'))
    .catch((data) => console.log('something went wrong!!!' + data))



module.exports = {
    Offer,
    Order,
    User,
    Game,
    Image
}