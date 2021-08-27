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

const { createTestimonial, deleteTestimonial, updateTestimonial, getTestimonialsList } = require('../controllers/testimonial');

/*****************************************************************************
 *
 * Routes
 *
 */
router.post('/', [tokenValidator, adminValidator, activitiesValidator], createTestimonial);
router.delete('/', [tokenValidator, adminValidator, deleteTestimonial], createTestimonial);
router.put('/:id',[tokenValidator, adminValidator],updateTestimonial); 
router.get('/', getTestimonialsList)

module.exports = router;
