const { Router } = require('express');
const router = Router();

const adminValidator = require ('../middleware/verifyAdmin');
const tokenValidator = require('../middleware/verifyToken');

const {getCategories} = require('../controllers/categories'); 

router.get('/',[tokenValidator, adminValidator], getCategories); 

module.exports = router; 
