const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Game = require('./Game');

const Offer = db.define("offer", {
    header:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.STRING
    }
    
}, {
    timestamps: false
});


module.exports = Offer;