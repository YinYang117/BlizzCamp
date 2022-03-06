const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');
const usersRouter = require('./users');
const sessionRouter = require('./session');

router.use('/users', usersRouter);
router.use('/session', sessionRouter);

module.exports = router;