'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' })
    Image.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Image;
};