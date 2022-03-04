const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res, next) => {
  const { credential, password } = req.body;
  console.log('creds and pass', credential, password)
  const user = await User.login({ credential, password });
  console.log('user from in session api:', user)
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

// router.get('/') = {

// }

// router.delete('/') = {

// }

module.exports = router;  