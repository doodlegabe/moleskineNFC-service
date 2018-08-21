
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
      onDelete: 'NO ACTION', // eventually a tag would be independent of notebooks
    });
  };

  return Tag;

};


