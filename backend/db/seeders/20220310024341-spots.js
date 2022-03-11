'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [{
      userId: '7',
      world: 'Sanctuary',
      location: 'Mount Arreat',
      mainImage: "https://static.wikia.nocookie.net/diablo/images/3/38/Arreat_Crater.jpg/",
      mainImageAlt: "Picture of Mount Arreat",
      description: 'The Heart of this World lives here buried underground.',
      price: 'Free'
    },
    {
      userId: '7',
      world: 'Korhal',
      location: 'Mengsk Palace',
      mainImage: "https://media.forgecdn.net/attachments/169/445/Terrain_260.jpg",
      mainImageAlt: "Picture of Mengsk Palace",
      description: 'This temple has existed here on this planet for thousands of years! What a landmark.',
      price: '225'
    },
    {
      userId: '7',
      world: 'Storm',
      location: 'The Nexus',
      mainImage: "https://static.wikia.nocookie.net/allstars_gamepedia/images/c/c8/Nexus.jpg/",
      mainImageAlt: "Picture of The Nexus",
      description: 'The Nexus is the main Tourist Attraction in the Storm! Here, Heros from many other worlds battle it out daily!',
      price: '15'
    },
    {
      userId: '7',
      world: 'Auir',
      location: 'Local Protoss Nexus',
      mainImage: "https://cdnb.artstation.com/p/assets/images/images/004/199/831/large/charles-lee-z-sc2-rebuild.jpg?1481264194",
      mainImageAlt: "Picture of Local Protoss Nexus",
      description: 'From the top of this Shrine, guests have an absolutely magnificient view!',
      price: '80'
    },
    {
      userId: '7',
      world: 'Overworld',
      location: 'Hanamura',
      mainImage: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/46/Hanamura_concept.jpg/",
      mainImageAlt: "Picture of Hanamura",
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