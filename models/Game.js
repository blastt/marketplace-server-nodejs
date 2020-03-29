const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Offer = require('./Offer');
const Game = db.define("game", {
    name: {
        type: Sequelize.STRING
    },
    value: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Game;