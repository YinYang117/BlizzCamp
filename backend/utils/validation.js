const { validationResult } = require('express-validator');
// ^ comes with check and validationResult


const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);
  console.log('VALIDATION ERROS HERE', validationErrors)
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array()
    errors.map((error) => `${error.msg}`);

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