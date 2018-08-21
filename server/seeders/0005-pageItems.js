let mockData = require('../../test/mocks/pageItems');
let mockPageItems = mockData.listPageItems();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PageItems', [
        {
          body :mockPageItems.pageItems[0].body,
          image: mockPageItems.pageItems[0].image,
          pageId: mockPageItems.pageItems[0].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[1].body,
          image: mockPageItems.pageItems[1].image,
          pageId: mockPageItems.pageItems[1].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[2].body,
          image: mockPageItems.pageItems[2].image,
          pageId: mockPageItems.pageItems[2].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PageItems',{
      email: [
        mockPageItems.pageItems[0].body,
        mockPageItems.pageItems[1].body,
        mockPageItems.pageItems[2].body
      ]
    });
  }
};



