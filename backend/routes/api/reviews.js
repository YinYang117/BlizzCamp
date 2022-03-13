const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
const { Review } = require('../../db/models');

// VALIDATORS
const validateReview = [
  check()
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage(''),
  check()
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage(''),
  handleValidationErrors
];

// new review
router.post('/', validateReview, asyncHandler(async (req, res, next) => {

}));


router.delete('/', (req, res) => {

});


router.get('/spot/:spotId', asyncHandler(async (req, res) => {
  const id = req.params.spotId;
  const spotId = parseInt(id, 10);
  const reviews = await Review.findAll({ where: { spotId }})
  return res.json(reviews);
}));

router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll();
  return res.json(reviews);
}))

module.exports = router;