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
const verifyToken = require('../middleware/verifyToken');

/*****************************************************************************
 *
 * Controller
 *
 */
const { login, getUserInfo } = require('../controllers/auth');

/*****************************************************************************
 *
 * Routes
 *
 */
router.post('/login', validateLogin, login);
router.get('/me', verifyToken, getUserInfo);

module.exports = router;
