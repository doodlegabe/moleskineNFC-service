let mockData = require('../../test/mocks/tags');
let mockTags = mockData.listTags();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tags', [
        {
          uuid: mockTags.tags[0].uuid,
          uri: mockTags.tags[0].uri,
          notebookId: mockTags.tags[0].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          uuid: mockTags.tags[1].uuid,
          uri: mockTags.tags[1].uri,
          notebookId: mockTags.tags[1].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          uuid: mockTags.tags[2].uuid,
          uri: mockTags.tags[2].uri,
          notebookId: mockTags.tags[2].notebookId,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags',{
      email: [
        mockTags.uuid[0].uuid,
        mockTags.uuid[1].uuid,
        mockTags.uuid[2].uuid
      ]
    });
  }

};



