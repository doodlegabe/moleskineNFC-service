
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    uuid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uri: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });

  Tag.associate = (models) => {
    Tag.belongsTo(models.Notebook, {
      foreignKey: 'notebookId',
      as: 'notebook'
    });
  };

  return Tag;

};


