'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    discord: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};