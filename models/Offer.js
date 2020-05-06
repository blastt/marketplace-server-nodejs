module.exports = (db, Sequelize) => {
    var Offer = db.define("offer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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

    Offer.associate = models => {
        Offer.belongsToMany(models.game, { through: { model: models.offer_game } });
        Offer.belongsTo(models.user);
        Offer.hasOne(models.order, {
            foreignKey: {
                allowNull: false
            }
        });
        Offer.hasMany(models.image, {
            as: 'images',
            foreignKey: "offerId"
        });
    };


    return Offer;
}