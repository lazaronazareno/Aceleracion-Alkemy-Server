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
router.use('/users', require('./users'));
router.use('/activities', require('./activities'));
router.use('/contacts', require('./contacts'));
router.use('/categories', require('./categories'));
router.use('/testimonials', require('./testimonial'));
router.use('/members', require('./members'));

module.exports = router;
