const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Spot } = require('../../db/models');
const router = express.Router();

// VALIDATORS

// TO DO: ADD MORE VALIDATORS, AND HANDLE THE ERRORS
const validateSpot = [
  check('world')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide an entry for World'),
  check('world')
    .isLength({ min: 2 })
    .withMessage('World must have at least 2 characters')
    .isLength({ max: 60 })
    .withMessage('World has a limit of 60 characters'),
  check('location')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a Location at least 3 characters long')
    .isLength({ max: 256 })
    .withMessage('Location has a 256 character limit'),
  check('mainImage')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('mainImage url has a minimun of 4 characters')
    .isLength({ max: 256 })
    .withMessage('MainImage has a 256 character limit'),
  check('mainImageAlt')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('mainImage url has a minimun of 2 characters')
    .isLength({ max: 256 })
    .withMessage('MainImage has a 256 character limit'),
  check('price')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Please provide a price.')
    .isLength({ max: 256 })
    .withMessage('Price has a 256 character limit'),
  handleValidationErrors
];

router.delete('/:spotId', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.spotId, 10);
  const doomedSpot = await Spot.findByPk(spotId);
  await doomedSpot.destroy();
  res.json({})
  // ^res.json blank? or return, or "status": "deleted" hehe
}));

router.put('/:spotId', asyncHandler(async (req, res) => {
  const { world, location, mainImage, mainImageAlt, description, price } = req.body;
  const spotId = parseInt(req.params.spotId, 10);
  const spot = await Spot.findByPk(spotId);
  spot.update({ world, location, mainImage, mainImageAlt, description, price })
  
  res.json({})
  // ^ play with this final statement. res.json blank? or return
}));

router.get('/:spotId', asyncHandler(async (req, res) => {
  const id = req.params.spotId;
  const idInt = parseInt(id, 10);
  const spot = await Spot.findByPk(idInt)
  return res.json(spot)
}))

// router.get('/user/:userId(\\d+)', asyncHandler(async (req, res) => {
//   const id = parseInt(req.params.useId, 10);
//   const spots = await Spot.getSpotsByUserId(id);
//   return res.json({ spots })
// })); 

router.post('/new', validateSpot, asyncHandler(async (req, res) => {
  const { userId, world, location, mainImage, mainImageAlt, description, price } = req.body;
  const spot = await Spot.create({ userId, world, location,  mainImage, mainImageAlt, description, price });
  return res.json(spot);
}));

router.get('/', asyncHandler(async (req, res) => {
  const spots = await Spot.allSpots();
  return res.json({ spots })
  // If I delete the { } ^ I'll need to change how I key into this in a few components
}));

module.exports = router;