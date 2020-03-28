const Sequelize = require('sequelize');
const db = require('../config/database.js');

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

    //Offer.belongsTo(User);


module.exports = Offer;