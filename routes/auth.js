/*****************************************************************************
 *
 * Import packages
 *
 */
const { Router } = require('express');
const router = Router();

/*****************************************************************************
 *
 * Middlewares
 *
 */
const validateLogin = require('../middleware/validate-login');
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
router.post('/login', validateLogin, login);
router.post('/register', validateRegister, registerUser.save);
router.get('/me', verifyToken, getUserInfo);

module.exports = router;
