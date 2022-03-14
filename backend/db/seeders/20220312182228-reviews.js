'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 2,
        title: 'great place!',
        description: 'I gave this a 4 out of 10',
        rating: 4,
      },
      {
        userId: 3,
        spotId: 2,
        title: 'some great place!',
        description: 'I gave this a 2 out of 10',
        rating: 2,
      },
      {
        userId: 4,
        spotId: 2,
        title: 'really great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 4,
      },
      {
        userId: 2,
        spotId: 2,
        title: 'great place!',
        description: 'I gave this a 110 out of 10', 
        rating: 110,
      },
      {
        userId: 2,
        spotId: 3,
        title: 'great place!',
        description: 'I gave this a 101 out of 10', 
        rating: 101,
      },
      {
        userId: 2,
        spotId: 3,
        title: 'great  really really great place!',
        description: 'I gave this a 5 out of 10', 
        rating: 5,
      },
      {
        userId: 3,
        spotId: 3,
        title: 'great placeS!',
        description: 'I gave this a 2 out of 10', 
        rating: 2,
      },
      {
        userId: 4,
        spotId: 4,
        title: 'greatest place!',
        description: 'I gave this a 10 out of 10', 
        rating: 4,
      },
      {
        userId: 2,
        spotId: 4,
        title: 'great to visit',
        description: 'I gave this a 10 out of 10', 
        rating: 11,
      },
      {
        userId: 2,
        spotId: 5,
        title: 'great  area',
        description: 'I gave this a 10 out of 10', 
        rating: 10,
      },
      {
        userId: 3,
        spotId: 5,
        title: 'supper great place!',
        description: 'I gave this a 10 out of 10', 
        rating: 2,
      },
      {
        userId: 4,
        spotId: 1,
        title: 'great place!',
        description: 'I gave this a 4 out of 10', 
        rating: 4,
      },
      {
        userId: 2,
        spotId: 1,
        title: 'great place!',
        description: 'I gave this a 150 out of 10', 
        rating: 150,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
