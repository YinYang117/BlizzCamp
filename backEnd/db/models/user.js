'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

// TODO
// what scope do these need to be nested in
User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
};

User.prototype.toSafeObject = function() { // this cannot be an arrow function
  const { id, username, email } = this; // context will be the User instance
  return { id, username, email };
};

User.prototype.validatePassword = function (password) {
   return bcrypt.compareSync(password, this.hashedPassword.toString())
}

User.login = async function ({ credential, password }) {
// credential could be email or username as both are unique
// Should allow user to enter either-or to login
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential
      }
    }
  });

  if (user && user.validatePassword(password)) {
    return await User.scope('currentUser').findByPk(user.id)
  }
}

User.signup = async function ({ username, email, password }) {
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    username,
    email,
    hashedPassword
  });
  return await User.scope('currentUser').findByPk(user.id);
};

module.exports = (sequelize, DataTypes) => {
  // Some attributes, like unique, could be defined here and in migrations
  // It'd explicit, also redundant
  // I think allow null is ^, but is important enough to reiterate

  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        // isEmail: false   would like to test this out to see if it could work. Not sure
        isNotEmail(value) {
          if (Validator.isEmail(value)) { throw new Error('Cannot be an email.') }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword']}
          // returns a user obj without the hashedpass making it to the frontend
        },
        loginUser: {
          attributes: {}
          // sets aside emtpy {} to fill in with our login credentials
        }
      }
    });

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};