'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' })
    Image.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Image;
};