let mockData = require('../../test/mocks/users');
let mockUsers = mockData.listUsers();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          first_name :mockUsers.users[0].first_name,
          last_name: mockUsers.users[0].last_name,
          email: mockUsers.users[0].email,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          first_name :mockUsers.users[1].first_name,
          last_name: mockUsers.users[1].last_name,
          email: mockUsers.users[1].email,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          first_name :mockUsers.users[2].first_name,
          last_name: mockUsers.users[2].last_name,
          email: mockUsers.users[2].email,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users',{
      email: [
        mockUsers.users[0].email,
        mockUsers.users[1].email,
        mockUsers.users[2].email
      ]
    });
  }
};



