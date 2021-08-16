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
 
  const contactValidator  = require ('../middleware/validate-contacts')
 /*****************************************************************************
  *
  * Controller
  *
  */
 
 const { postContact } = require('../controllers/contacts')
 
 /*****************************************************************************
  *
  * Routes
  *
  */
 router.post('/', contactValidator, postContact); 
 
 module.exports = router;