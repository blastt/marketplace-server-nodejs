const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Offer = require('./Offer');
const Game = require('./Game');
const User = db.define("user", {
    username:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    login:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    }
    
}, {
    timestamps: false
});

module.exports = User;