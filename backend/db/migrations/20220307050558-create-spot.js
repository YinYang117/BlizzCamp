'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      world: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      mainImage: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      mainImageAlt: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      description: {
        type: Sequelize.STRING(256)
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};