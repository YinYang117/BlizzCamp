const { validationResult } = require('express-validator');
// ^ comes with check and validationResult

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  console.log('VALIDATION ERRORS HERE', validationErrors.errors)
  if (!validationErrors.isEmpty()) {
    const err = Error('Bad request');
    err.errors = validationErrors.errors.map(error => `${error.msg}`)
    // breaks or at least doesn't return expected data if you change so another key
    // IE: err.errorMsgs did not work
    err.status = 400;
    err.title = 'Bad request';
    next(err);
  }
  // All clear? Keep going
  next();
}
  
module.exports = { handleValidationErrors };