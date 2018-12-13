let mockData = require('../../test/mocks/tags');
let mockTags = mockData.listTags();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tags', mockTags.tags);
  },
};



