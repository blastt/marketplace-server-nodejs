module.exports = (db, Sequelize) => {
    let User = db.define("user", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    User.associate = models => {
        User.hasMany(models.offer, {
            as: 'offers',
            foreignKey: 'userId'
        });
    };


    return User;
}