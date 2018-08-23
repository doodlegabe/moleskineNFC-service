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
        },
        {
          body :mockPageItems.pageItems[3].body,
          image: mockPageItems.pageItems[3].image,
          pageId: mockPageItems.pageItems[3].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[4].body,
          image: mockPageItems.pageItems[4].image,
          pageId: mockPageItems.pageItems[4].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[5].body,
          image: mockPageItems.pageItems[5].image,
          pageId: mockPageItems.pageItems[5].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[6].body,
          image: mockPageItems.pageItems[6].image,
          pageId: mockPageItems.pageItems[6].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[7].body,
          image: mockPageItems.pageItems[7].image,
          pageId: mockPageItems.pageItems[7].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[8].body,
          image: mockPageItems.pageItems[8].image,
          pageId: mockPageItems.pageItems[8].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[9].body,
          image: mockPageItems.pageItems[9].image,
          pageId: mockPageItems.pageItems[9].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[10].body,
          image: mockPageItems.pageItems[10].image,
          pageId: mockPageItems.pageItems[10].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[11].body,
          image: mockPageItems.pageItems[11].image,
          pageId: mockPageItems.pageItems[11].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[12].body,
          image: mockPageItems.pageItems[12].image,
          pageId: mockPageItems.pageItems[12].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[13].body,
          image: mockPageItems.pageItems[13].image,
          pageId: mockPageItems.pageItems[13].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[14].body,
          image: mockPageItems.pageItems[14].image,
          pageId: mockPageItems.pageItems[14].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[15].body,
          image: mockPageItems.pageItems[15].image,
          pageId: mockPageItems.pageItems[15].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[16].body,
          image: mockPageItems.pageItems[16].image,
          pageId: mockPageItems.pageItems[16].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[17].body,
          image: mockPageItems.pageItems[17].image,
          pageId: mockPageItems.pageItems[17].pageId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          body :mockPageItems.pageItems[18].body,
          image: mockPageItems.pageItems[18].image,
          pageId: mockPageItems.pageItems[18].pageId,
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
        mockPageItems.pageItems[2].body,
        mockPageItems.pageItems[3].body,
        mockPageItems.pageItems[4].body,
        mockPageItems.pageItems[5].body,
        mockPageItems.pageItems[6].body,
        mockPageItems.pageItems[7].body,
        mockPageItems.pageItems[8].body,
        mockPageItems.pageItems[9].body,
        mockPageItems.pageItems[10].body,
        mockPageItems.pageItems[11].body,
        mockPageItems.pageItems[12].body,
        mockPageItems.pageItems[13].body,
        mockPageItems.pageItems[14].body,
        mockPageItems.pageItems[15].body,
        mockPageItems.pageItems[16].body,
        mockPageItems.pageItems[17].body,
        mockPageItems.pageItems[18].body
      ]
    });
  }
};



