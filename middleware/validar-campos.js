/*****************************************************************************
 *
 * Import packages
 *
 */
const { validationResult } = require('express-validator');

/*****************************************************************************
 *
 * Valido si hay errores en los campo mediante express-validator
 *
 */
const validarCampos = (req, res, next) => {
  // Valido si hay errores los envio como respuesta
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errores: errores.mapped(),
    });
  }

  next();
};

module.exports = {
  validarCampos,
};
