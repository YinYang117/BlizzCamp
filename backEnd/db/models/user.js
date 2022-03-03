'use strict';
module.exports = (sequelize, DataTypes) => {
  // Some things, like unique, could be defined here and in migrations
  // It could be considered very explicit, but also redundant
  // I think allow null is ^, but is important enough to reiterate
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        // isEmail: false   would like to test this out to see if it could work. Not sure
        isNotEmail(value) {
          if (Validator.isEmail(value)) { throw new Error('Cannot be an email.')}
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
        len: [60,60]
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};