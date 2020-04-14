module.exports = (db, Sequelize) => {
    return db.define("offer", {
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
}