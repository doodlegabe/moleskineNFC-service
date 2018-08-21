let mockData = require('../../test/mocks/pages');
let mockPages = mockData.listPages();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pages', [
        {
          number :mockPages.pages[0].number,
          notebookId: mockPages.pages[0].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          number :mockPages.pages[1].number,
          notebookId: mockPages.pages[1].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          number :mockPages.pages[2].number,
          notebookId: mockPages.pages[2].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages',{
      email: [
        mockPages.pages[0].number,
        mockPages.pages[1].number,
        mockPages.pages[2].number
      ]
    });
  }
};



