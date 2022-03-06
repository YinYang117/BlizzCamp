const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { enviroment } = require('./config');
const isProduction = enviroment === 'production';
const routes = require('./routes');
const {ValidationError} =require('sequelize');
// const bcrypt = requires(bcrypt) in seeder.
// TODO where to import to hash new passwords


const app = express();
app.use(morgan('dev')); // logs information about reqs and res's
app.use(cookieParser());
app.use(express.json());

/////////////////////////////////////////////////////
// Route protection / security

if (!isProduction) {
  // Use in production because React front is different server
  // the Express backend. In production (Heroku), same origin
  app.use(cors())
}

app.use(
  // helmet sets headers to help protect your app
  // https://www.npmjs.com/package/helmet
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
);

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);

app.use(routes);

// Route connections finished
/////////////////////////////////////////////////////

// 404 Error
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource not found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
  // ^ passing err into next allows all other error
  // handlers after this to still be invoked with their next's
});

// Sequelize errors
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map(e => e.message);
    err.title = 'Validation error';
  }
  next(err)
})

// Error formatter
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
    // Ternary operator  a condition, ?, truthy outcome, :, falsey outcome
  })
})

// Middleware finished
/////////////////////////////////////////////////////
module.exports = app;