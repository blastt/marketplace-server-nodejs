module.exports = (db, Sequelize) => {
    var Image = db.define('image', {
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
    Image.associate = models => {
        Image.belongsTo(models.offer);
    };

    return Image;
}