const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Spot } = require('../../db/models');
const router = express.Router();


// VALIDATORS
const validateSpot = [
  check('world')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid world'),
  check('world')
    .isLength({ min: 3 })
    .withMessage('World must have at least 2 characters')
    .isLength({ max: 256 })
    .withMessage('World has a limit of 256 characters'),
  check('location')
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage('Please provide a Location at least 3 characters long')
    .isLength({ max: 256 })
    .withMessage('Location has a 256 character limit'),
  handleValidationErrors
];

router.get('/', asyncHandler(async (req, res) => {
  return res.json({ user });
}));

router.post('/', validateSpot, asyncHandler(async (req, res) => {
  const { world, location, description, price } = req.body;
  const spot = await Spot.create({ email, username, password });

  return res.json({  });
}));

module.exports = router;