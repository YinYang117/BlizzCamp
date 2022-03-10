'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [{
      world: 'Sanctuary',
      location: 'Mount Arreat',
      description: 'The Heart of this World lives here buried underground.',
      price: 'Free'
    },
    {
      world: 'Korhal',
      location: 'Local Temple of Aduin',
      description: 'This temple has existed here on this planet for thousands of years! What a landmark.',
      price: '225'
    },
    {
      world: 'Storm',
      location: 'The Nexus',
      description: 'The Nexus is the main Tourist Attraction in the Storm! Here, Heros from many other worlds battle it out daily!',
      price: '15'
    },
    {
      world: 'Auir',
      location: 'Xel Naga Shrine',
      description: 'From this Shrine, guests have an absolutely magnificient view!',
      price: '80'
    },
    {
      world: 'Overworld',
      location: 'Hanamura',
      description: 'Protected by their guardians of Overwatch, this peaceful Japanese city is a beautiful stop for anyone nearby.',
      price: 'Free'
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // Sequelize Operator
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Spots', {

    }, {});
  }
};