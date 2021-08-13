/*****************************************************************************
 *
 * Import packages
 *
 */
const express = require('express');
const router = express.Router();

/*****************************************************************************
 *
 * Routes
 *
 */
router.use('/auth', require('./auth'));
router.use('/news', require('./news'));
router.use('/activities', require('./activities'));

module.exports = router;
