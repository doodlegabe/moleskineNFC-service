let mockData = require('../../test/mocks/notebooks');
let mockNotebooks = mockData.listNotebooks();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', mockNotebooks.notebooks);
  }
};



