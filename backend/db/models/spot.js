'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    world: {
      allowNull: false,
      type: DataTypes.STRING
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    },
  }, {});
  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
  };
  return Spot;
};