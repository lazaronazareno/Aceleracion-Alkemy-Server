/*****************************************************************************
 *
 * Import packages
 *
 */
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

/*****************************************************************************
 *
 * Middlewares
 *
 */
const { validarCampos } = require('../middleware/validar-campos');
const validateRegister = require('../middleware/validate-register');
const verifyToken = require('../middleware/verifyToken');
/*****************************************************************************
 *
 * Controller
 *
 */
const { login, getUserInfo } = require('../controllers/auth');
const registerUser = require('../controllers/registerUser');

/*****************************************************************************
 *
 * Routes
 *
 */
router.post(
  '/login',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos,
  ],
  login,
);
router.post('/register', validateRegister, registerUser.save);
router.get('/me', verifyToken, getUserInfo);

module.exports = router;
