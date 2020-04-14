module.exports = (db, Sequelize) => {
    return db.define("user", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });
}