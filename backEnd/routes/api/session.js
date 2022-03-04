const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

// User.login, sets the token cookie
router.post('/', asyncHandler(async (req, res, next) => {
  const { credential, password } = req.body;
  // creds either email or username
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

// log out, clears token cookie
router.delete('/', (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'successful cookie clear' });
});

module.exports = router;