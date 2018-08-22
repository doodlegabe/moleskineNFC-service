const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

let sequelize;

if (process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true
  });
} else {
  if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    sequelize = new Sequelize(
      config.database, config.username, config.password, config
    );
  }
}

global.db = {};

fs.readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });


Object.keys(global.db).forEach(modelName => {
  if (global.db[modelName].associate) {
    global.db[modelName].associate(global.db);
  }
});

global.db.sequelize = sequelize;
global.db.Sequelize = Sequelize;

module.exports = global.db;