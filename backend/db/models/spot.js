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
      type: DataTypes.STRING,
      validate: {
         len: [2, 60]
      }
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [4, 256]
      }
    },
    mainImage: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [4, 256]
      }
    },
    mainImageAlt: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [2, 256]
      }
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
         len: [1, 256]
      }
    },
  }, {});


  // .create sequelize method for model classes, ='s build + save
  Spot.newSpot = async function ({ world, location, description, price }) {
    const newSpot = await Spot.create({
      userId, world, location, mainImage, mainImageAlt, description, price
    });
    return await newSpot;
  };

  Spot.allSpots = async function () {
    return await Spot.findAll()
  }

  Spot.getSpotsByUserId = async function ({ userId }) {
    return await Spot.findAll({ where: { userId }})
  }

  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true })
  };
  return Spot;
};