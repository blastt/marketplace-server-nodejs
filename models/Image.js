module.exports = (db, Sequelize) => {
    return db.define('image', {
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
}