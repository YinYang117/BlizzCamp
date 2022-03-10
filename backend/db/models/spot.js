'use strict';
const { Validator } = require('sequelize');

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


  // .create is a sequelize method for model classes that combines build and save
  Spot.newSpot = async function ({ world, location, description, price }) {
    const newSpot = await Spot.create({
      world, location, description, price
    });
    console.log('New spot from Spot model', newSpot)
    return await newSpot;
  };

  Spot.allSpots = async function ({}) {
    return await Spot.findAll()
  }

  Spot.getSpotsByUserId = async function ({ userId }) {
    console.log('userId should be Int here i think. In Spot Model:', userId)
    return await Spot.findAll({ where: { userId }})
  }

  // Spot.getFirstTenSpots = async function () {
  //   return await Spot.findAll({ order: 'ascending', limit: 10 })
  // }

  // These might not be as useful as I initially thought. in this code level / piece at least.

  // Spot.getLastTenSpots = async function () {
  //   return await Spot.findAll({ order: 'descending', limit: 10 })
  // }

  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
  };
  return Spot;
};