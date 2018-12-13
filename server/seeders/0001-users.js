let mockData = require('../../test/mocks/users');
let mockUsers = mockData.listUsers();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', mockUsers.users, {});
  }
};



