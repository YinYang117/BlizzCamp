'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 2,
        title: 'great place!',
        description: 'I gave this a 10 out of 10',
        rating: 10,
      },
      {
        userId: 3,
        spotId: 2,
        title: 'great place!',
        description: 'I gave this a 10 out of 10',
        rating: 2,
      },
      {
        userId: 4,
        spotId: 2,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 4,
      },
      {
        userId: 2,
        spotId: 2,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 110,
      },
      {
        userId: 2,
        spotId: 3,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 10,
      },
      {
        userId: 2,
        spotId: 3,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 10,
      },
      {
        userId: 3,
        spotId: 3,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 2,
      },
      {
        userId: 4,
        spotId: 4,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 4,
      },
      {
        userId: 2,
        spotId: 4,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 11,
      },
      {
        userId: 2,
        spotId: 5,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 10,
      },
      {
        userId: 3,
        spotId: 5,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 2,
      },
      {
        userId: 4,
        spotId: 1,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 4,
      },
      {
        userId: 2,
        spotId: 1,
        title: 'great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 10,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
