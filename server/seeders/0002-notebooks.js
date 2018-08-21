let mockData = require('../../test/mocks/notebooks');
let mockNotebooks = mockData.listNotebooks();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', [
        {
          title :mockNotebooks.notebooks[0].title,
          userId: mockNotebooks.notebooks[0].userId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          title :mockNotebooks.notebooks[1].title,
          userId: mockNotebooks.notebooks[1].userId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          title :mockNotebooks.notebooks[2].title,
          userId: mockNotebooks.notebooks[2].userId,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notebooks',{
      email: [
        mockNotebooks.notebooks[0].title,
        mockNotebooks.notebooks[1].title,
        mockNotebooks.notebooks[2].title
      ]
    });
  }
};



