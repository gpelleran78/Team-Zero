'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'production';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};
process.env.JAWSDB_URL= mysql://'ecpgf3x66a3v1ql3:er000yeqxbj0t9it@ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/o74xv68ph7b7as0h'

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  //var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


