const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Spot } = require('../../db/models');
const router = express.Router();


// VALIDATORS
const validateSignup = [
  check('world')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid world'),
  check('world')
    .isLength({ max: 256 })
    .withMessage('World limit of 256 characters exceeded')
    .isLength({ min: 3 })
    .withMessage('Email must have at least 3 characters')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a Username at least 4 characters long'),
  check('email')
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

router.get('/', asyncHandler(async (req, res) => {


  return res.json({ user });
}));

module.exports = router;