const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')

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
  const { credential, password } = req.body;
  const user = await User.login({ credential, password });
  
  if (!user) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['The provided credentials were invalid.'];
    return next(err);
  }
  await setTokenCookie(res, user);
  return res.json({ user });
}));


router.delete('/', (req, res) => {

});


router.get('/', (req, res) => {

});9

module.exports = router;