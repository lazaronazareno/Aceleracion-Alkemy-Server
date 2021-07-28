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
router.use( '/auth',      require('./auth') );

module.exports = router;
