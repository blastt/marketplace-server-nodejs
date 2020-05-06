module.exports = (db, Sequelize) => {
    var Order = db.define("order", {
        status: {
            allowNull: true,
            type: Sequelize.INTEGER
            // 1 'orderCreated',
            // 2 'sellerProviding',
            // 3 'adminChecking',
            // 4 'buyerConfirming',
            // 5 'payingToSeller',
            // 6 'closedSuccessfully', // Успешно закрыт
            // 7 'closedUnsuccessfully', // Неудачно закрыт
            // 8 'buyerCancelledEarly', // Покупатель закрыл сделку
            // 9 'sellerCancelledEarly', // Продавец закрыл сделку
            // 10 'adminCancelledEarly' 
        },
        sum: { // сумма заказа
            type: Sequelize.DECIMAL
        },
        amount: { // сумма, которую заплатали с учетом комиссии
            type: Sequelize.DECIMAL
        },
        withdrawAmount: { // сумма, которую заплатали без учета комиссии
            type: Sequelize.DECIMAL
        },

    }, {
        timestamps: false
    });
    Order.associate = models => {
        Order.belongsTo(models.offer);
    };

    return Order;
}