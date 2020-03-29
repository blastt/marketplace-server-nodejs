const Sequelize = require('sequelize');
module.exports = new Sequelize('mydb', 'postgres', 'dijid82adssa', {
    host: 'localhost',
    dialect: 'postgres',
});
