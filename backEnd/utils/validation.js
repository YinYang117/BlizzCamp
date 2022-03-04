const { validationResult } = require('express-validator');
// ^ comes with check and validationResult


const handelValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    console.log('Valication Errors from Utils Here: ', validationErrors)
    const errors = validationErrors
    console.log('Errors from Utils Here: ', errors)
    .array()
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
  
module.exports = { handelValidationErrors };