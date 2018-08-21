module.exports = {
  up: (queryInterface, Sequelize) =>
   queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      uri: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     notebookId: {
       type: Sequelize.INTEGER,
       onDelete: 'CASCADE',
       references:{
         model: 'Notebooks',
         key: 'id',
         as: 'notebookId'
       }
     }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Tags'),
};
