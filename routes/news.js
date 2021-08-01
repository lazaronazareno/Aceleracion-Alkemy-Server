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

/*****************************************************************************
 *
 * Controller
 *
 */
const { getNewsList } = require('../controllers/getNewsList');

/*****************************************************************************
 *
 * Routes
 *
 */
router.get('/', getNewsList);

module.exports = router;
