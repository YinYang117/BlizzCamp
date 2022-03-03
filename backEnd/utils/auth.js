const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;


const setTokenCookie = (res, user) => {
  // Create token
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) } // # from .env
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set cookie token
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge is milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax" 
  });

  return token;
}