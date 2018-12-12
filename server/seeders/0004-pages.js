let mockData = require('../../test/mocks/pages');
let mockPages = mockData.listPages();

//ToDo: needs a guid here.

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pages', mockPages.pages);
  },
  //
  // down: (queryInterface, Sequelize) => {
  //   return queryInterface.bulkDelete('Pages',{
  //     notebookId: deletionKeys
  //   });
  // }
};



