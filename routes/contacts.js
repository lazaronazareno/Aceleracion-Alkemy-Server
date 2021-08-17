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
  const adminValidator = require ('../middleware/verifyAdmin')
  const tokenValidator = require('../middleware/verifyToken')
 /*****************************************************************************
  *
  * Controller
  *
  */
 
 const { postContact, getContacts } = require('../controllers/contacts');
 /*****************************************************************************
  *
  * Routes
  *
  */
 router.post('/', contactValidator, postContact); 
 router.get('/',[tokenValidator, adminValidator], getContacts);
 
 module.exports = router;