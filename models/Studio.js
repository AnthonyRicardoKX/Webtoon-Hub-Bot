'use strict';
module.exports = (sequelize, DataTypes) => {
    var Studio = sequelize.define('studio', {
        mal_id: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {});
    Studio.associate = function(models) {
        // associations can be defined here
    };
    return Studio;
};
