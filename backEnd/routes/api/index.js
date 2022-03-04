const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');
const usersRouter = require('./users');
const sessionRouter = require('./session');

router.use('./users', usersRouter);
router.use('./session', sessionRouter);
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
})

// Real Routes End
/////////////////////////////////////////////////////
// Test Routes Begin

/* 

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

// set cookie test
router.get('/set-token-cookie', asyncHandler( async(req, res) => {
  const user = await User.findOne({
    where: { username: 'KeanuKitsune' }
  });
  setTokenCookie(res, user);

  // Possibly due to how express is making the query here, or app.use(express.json());
  // No email or hashedPass, etc. despite not invoking User.scope
  // { "user": { "id": 7, "username": "KeanuKitsune" }} is the json returned
  return res.json({ user });
}));

// restore User test
// verifies jwt. adds user (safeOjb scopped) info to req.user through restoreUser
router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
})

// requireAuth
router.get('/require-auth', requireAuth, (req, res) => {
  return res.json(req.user);
});

*/

module.exports = router;