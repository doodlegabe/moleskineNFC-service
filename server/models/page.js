module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Page.associate = (models) => {
    Page.belongsTo(models.Notebook, {
      foreignKey: 'notebookId',
      onDelete: 'CASCADE',
    });
    Page.hasMany(models.PageItem, {
      foreignKey: 'pageId',
      as: 'pageItems'
    });
  };

  return Page

};

