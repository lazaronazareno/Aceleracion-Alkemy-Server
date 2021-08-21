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
const getRoutes = require('../middleware/getRoutes');

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
router.get('/me', [verifyToken, getRoutes], getUserInfo);

module.exports = router;
