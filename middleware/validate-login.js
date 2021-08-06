/*****************************************************************************
 *
 * Import packages
 *
 */
const { check, validationResult } = require('express-validator');

/*****************************************************************************
 *
 * Valido si hay errores en los campo mediante express-validator
 *
 */
const validateLogin = async (req, res, next) => {
  
  await check('email', 'This field cannot be empty').isEmail().run(req);
  await check('password', 'This field cannot be empty').not().isEmpty().run(req);
  
  // Valido si hay errores los envio como respuesta
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

module.exports =  validateLogin;
