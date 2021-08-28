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
  const publicValidator= require ('../middleware/validate-public')
  const adminValidator = require('../middleware/verifyAdmin');
  const tokenValidator = require('../middleware/verifyToken');
 /*****************************************************************************
  *
  * Controller
  *
  */
 
 const { postPublic, getPublicData, deletePublic } = require('../controllers/public')
 
 /*****************************************************************************
  *
  * Routes
  *
  */
 
 router.get('/public', getPublicData); 
 router.post('/public',[tokenValidator, adminValidator,publicValidator], postPublic); 
 router.delete('/public/:id',[tokenValidator, adminValidator], deletePublic);
 
 module.exports = router;
 