module.exports = (sequelize, DataTypes) => {
  const PageItem = sequelize.define('PageItem', {
    body: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  PageItem.associate = (models) => {
    PageItem.belongsTo(models.Page, {
      foreignKey: 'pageId',
      onDelete: 'CASCADE',
    });
  };

  return PageItem

};


