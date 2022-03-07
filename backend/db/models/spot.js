'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.STRING,
    world: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};