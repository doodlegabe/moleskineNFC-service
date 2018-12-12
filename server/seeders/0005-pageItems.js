let mockData = require('../../test/mocks/pageItems');
let mockPageItems = mockData.listPageItems();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PageItems', mockPageItems.pageItems);
  },
};



