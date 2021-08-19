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
 
 const { postPublic, getPublicData } = require('../controllers/public')
 
 /*****************************************************************************
  *
  * Routes
  *
  */
 
 router.post('/public', postPublic); 
 router.get('/public', getPublicData); 
 
 
 module.exports = router;
 