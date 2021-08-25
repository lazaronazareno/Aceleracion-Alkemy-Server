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
  const tokenValidator = require('../middleware/verifyToken')
 /*****************************************************************************
  *
  * Controller
  *
  */
 
 const { postActivities, updateActivity, getActivities, getActivitiesById } = require('../controllers/activities')
 
 /*****************************************************************************
  *
  * Routes
  *
  */
 router.post('/', [tokenValidator,adminValidator, activitiesValidator], postActivities); 
 router.patch('/:id',[tokenValidator, adminValidator], updateActivity);
 router.get('/',getActivities)
 router.get('/:id', getActivitiesById) 
 
 module.exports = router;
 