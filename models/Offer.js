const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Offer = db.define("offer", {
    header: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    accountLogin: {
        type: Sequelize.STRING
    },
    sellerPaysCharge: {
        type: Sequelize.BOOLEAN
    },
    accountCreatedDate: {
        type: Sequelize.DATEONLY
    },
    price: {
        type: Sequelize.DECIMAL
    }
    
}, {
    timestamps: false
});


module.exports = Offer;