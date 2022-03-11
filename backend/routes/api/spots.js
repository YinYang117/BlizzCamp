const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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

router.delete('/:spotId(\\d+)', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.spotId, 10);
  const doomedSpot = await Spot.findByPk(spotId);
  await doomedSpot.destroy();
  res.json({})
  // ^ play with this final statement. res.json blank? or return
}));

router.put('/:spotId(\\d+)', asyncHandler(async (req, res) => {
  const { world, location, description, price } = req.body;
  const spotId = parseInt(req.params.spotId, 10);
  const spot = await Spot.findByPk(spotId);
  spot.update({ world, location, description, price })
  
  res.json({})
  // ^ play with this final statement. res.json blank? or return
}));

router.get('/:spotId', asyncHandler(async (req, res) => {
  const id = req.params.spotId;
  const idInt = parseInt(id, 10);
  const spot = await Spot.findByPk(idInt)
  return res.json(spot)
}))

router.get('/user/:userId(\\d+)', asyncHandler(async (req, res) => {
  const id = parseInt(req.params.useId, 10);
  const spots = await Spot.getSpotsByUserId(id);
  return res.json({ spots })
})); 

router.post('/new', validateSpot, asyncHandler(async (req, res) => {
  const { world, location, description, price } = req.body;
  const spot = await Spot.create({ world, location, description, price });

  return res.json({ spot });
}));

router.get('/', asyncHandler(async (req, res) => {
  const spots = await Spot.allSpots();
  return res.json({ spots })
}));

module.exports = router;