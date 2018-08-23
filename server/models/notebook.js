module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Notebook.associate = (models) => {
    Notebook.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'owner'
    });
    Notebook.hasOne(models.Tag, {
      foreignKey: 'notebookId',
      as: 'tag'
    });
    Notebook.hasMany(models.Page, {
      foreignKey: 'notebookId',
      as: 'pages'
    });
  };

  return Notebook

};


