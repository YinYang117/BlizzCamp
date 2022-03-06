const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// VALIDATORS
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email')
    .isLength({ max: 256 })
    .withMessage('Email limit of 256 characters exceeded')
    .isLength({ min: 3 })
    .withMessage('Email must have at least 3 characters')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a Username at least 4 characters long')
    .isLength({ max: 30 })
    .withMessage('Username has a 30 character limit'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Password must be at least 4 characters')
    .matches(/^(?=.*[a-zA-Z])/, 'g')
    .withMessage('Password must contain at least 1 letter')
    .matches(/^(?=.*[0-9])/, 'g')
    .withMessage('Password must contain at least 1 number')
    .matches(/^(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain 1 special character'),
  handleValidationErrors
];
// Reminder: don't need to handle confirm pass valid
// because It's setup to compare against pass in the form handler
// and wont dispatch unless that passes first 

// Signup route, needs req.b w/ new user info
router.post('/', validateSignup, asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.signup({ email, username, password });
  // BONUS implement confirm password

  await setTokenCookie(res, user);

  return res.json({ user });
}));

module.exports = router;