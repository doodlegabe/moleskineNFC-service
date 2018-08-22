const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';


let sequelize;

if (process.env.NODE_ENV === "production") {

console.log('on prod');

  const prodConfig = {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     process.env.DATABASE_PORT,
    host:     process.env.DATABASE_HOST,
    logging:  false
  };

  sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, prodConfig);

} else {

  console.log('not on prod');
  const config = require(`${__dirname}/../config/env.js`)[env];
  sequelize = new Sequelize(config.database, config.username, config.password, config);
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