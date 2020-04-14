module.exports = (db, Sequelize) => {
    return db.define("game", {
        name: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.STRING
        },
        rank: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });
} 