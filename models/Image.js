const Sequelize = require('sequelize');
const db = require('../config/database');

const Image = db.define('image', {
    type: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    data: {
        type: Sequelize.BLOB('long')
    }
}, {
    timestamps: false
});

module.exports = Image;