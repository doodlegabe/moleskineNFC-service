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
        },
        {
          number :mockPages.pages[3].number,
          notebookId: mockPages.pages[3].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          number :mockPages.pages[4].number,
          notebookId: mockPages.pages[4].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          number :mockPages.pages[5].number,
          notebookId: mockPages.pages[5].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          number: mockPages.pages[6].number,
          notebookId: mockPages.pages[6].notebookId,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          number :mockPages.pages[7].number,
          notebookId: mockPages.pages[7].notebookId,
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
        mockPages.pages[2].number,
        mockPages.pages[3].number,
        mockPages.pages[4].number,
        mockPages.pages[5].number,
        mockPages.pages[6].number,
        mockPages.pages[7].number,
        mockPages.pages[8].number
      ]
    });
  }
};



