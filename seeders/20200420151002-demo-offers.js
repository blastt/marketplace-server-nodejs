'use strict';
const offers = require('./createOffers');



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('offers', offers);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('offers', null, {});
  }
};
