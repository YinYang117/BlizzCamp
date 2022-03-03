const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { enviroment } = require('./config');
const isProduction = enviroment === 'production';
const routes = require('./routes');

const app = express();
app.use(morgan('dev')); // logs information about reqs and res's
app.use(cookieParser());
app.use(express.json());

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






module.exports = app;