module.exports = (db, Sequelize) => {
    return db.define("offer_game", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        }
      }, {
        timestamps: false
    });
}