'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 2,
        review: 'I gave this a 10 out of 10',
        rating: 10,
      },
      {
        userId: 3,
        spotId: 2,
        review: 'I gave this a 210 out of 10',
        rating: 2,
      },
      {
        userId: 4,
        spotId: 2,
        review: 'I gave this a 110 out of 10',
        rating: 4,
      },
      {
        userId: 2,
        spotId: 2,
        review: 'I gave this a 10 out of 10',
        rating: 110,
      },
      {
        userId: 2,
        spotId: 3,
        review: 'Lorem Ipsum woot woot!',
        rating: 10,
      },
      {
        userId: 2,
        spotId: 3,
        review: 'I gave this a 10 out of 10',
        rating: 10,
      },
      {
        userId: 3,
        spotId: 3,
        review: 'I gave this a 210 out of 10',
        rating: 2,
      },
      {
        userId: 4,
        spotId: 4,
        review: 'I gave this a 110 out of 10',
        rating: 4,
      },
      {
        userId: 2,
        spotId: 4,
        review: 'I gave this a 10 out of 10',
        rating: 11,
      },
      {
        userId: 2,
        spotId: 5,
        review: 'I gave this a 10 1@1out of 10',
        rating: 10,
      },
      {
        userId: 3,
        spotId: 5,
        review: 'I gave this lolol a 210 out of 10',
        rating: 2,
      },
      {
        userId: 4,
        spotId: 1,
        review: 'I gave this awsome place a 110 out of 10',
        rating: 4,
      },
      {
        userId: 2,
        spotId: 1,
        review: 'I gave this a 10 out of 10 seed data!',
        rating: 10,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
