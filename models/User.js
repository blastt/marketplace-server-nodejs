const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Offer = require('./Offer');
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

    User.hasMany(Offer, {
        as: 'offers'
      });

module.exports = User;