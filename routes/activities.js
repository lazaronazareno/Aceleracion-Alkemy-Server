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
 
  const activitiesValidator  = require ('../middleware/validate-activities') 
  const adminValidator = require ('../middleware/verifyAdmin')
 /*****************************************************************************
  *
  * Controller
  *
  */
 
 const { postActivities } = require('../controllers/activities')
 
 /*****************************************************************************
  *
  * Routes
  *
  */
 router.post('/', [adminValidator, activitiesValidator], postActivities); 
 
 
 module.exports = router;
 