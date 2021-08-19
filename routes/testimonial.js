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

const activitiesValidator = require('../middleware/validate-activities');
const adminValidator = require('../middleware/verifyAdmin');
const tokenValidator = require('../middleware/verifyToken');
/*****************************************************************************
 *
 * Controller
 *
 */

const { createTestimonial, deleteTestimonial } = require('../controllers/testimonial');

/*****************************************************************************
 *
 * Routes
 *
 */
router.post('/', [tokenValidator, adminValidator, activitiesValidator], createTestimonial);
router.delete('/', [tokenValidator, adminValidator, deleteTestimonial], createTestimonial);

module.exports = router;
