'use strict';
module.exports = (sequelize, DataTypes) => {
  var list = sequelize.define('list', {
    name: DataTypes.STRING,
    maths: DataTypes.INTEGER,
    science: DataTypes.INTEGER,
    social: DataTypes.INTEGER
  }, {});
  list.associate = function(models) {
    // associations can be defined here
  };
  return list;
};