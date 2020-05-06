module.exports = (db, Sequelize) => {
    var Game = db.define("game", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
    Game.associate = models => {
        Game.belongsToMany(models.offer, { 
            through: { model: models.offer_game }
        });
    };

    return Game;
} 