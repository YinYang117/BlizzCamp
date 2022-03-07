'use strict';
const bcrypt = require('bcryptjs')

// TODO: continue research on how to use
// .env to create a password, even if it's for a fake user
// so that anyone that gains access to this still wont have the .env

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'demo-user',
      email: 'demo-user@demo.com',
      hashedPassword: bcrypt.hashSync('password1!', 10)
    },
    {
      username: 'KeanuKitsune',
      email: 'JohnWick@japaneseFox.com',
      hashedPassword: bcrypt.hashSync('!1Aa', 10)
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    // Sequelize Operator
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo-user', 'KeanuKitsune'] }
      // Delete from Users where the username is in [ ]
    }, {});
  }
};
