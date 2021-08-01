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

module.exports = router;
