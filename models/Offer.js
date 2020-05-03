module.exports = (db, Sequelize) => {
    return db.define("offer", {
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
}