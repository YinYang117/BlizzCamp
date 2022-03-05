const { validationResult } = require('express-validator');
// ^ comes with check and validationResult


const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
    console.log('###!!! errors from utils validation:', errors)
    errors.array()
    .map((error) => `${error.msg}`);

    const err = Error('Bad request');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request';
    next(err);
  }
  // All clear? Keep going
  next();
}
  
module.exports = { handleValidationErrors };