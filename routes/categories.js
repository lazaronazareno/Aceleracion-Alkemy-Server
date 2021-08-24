const { Router } = require('express');
const router = Router();

const adminValidator = require ('../middleware/verifyAdmin');
const tokenValidator = require('../middleware/verifyToken');
const categoryValidator = require('../middleware/validate-category');

const {getCategories, createCategory, deleteCategory,updateCategory} = require('../controllers/categories'); 

router.get('/',[tokenValidator, adminValidator], getCategories); 
router.post('/',[tokenValidator, adminValidator, categoryValidator], createCategory);
router.delete('/:id', [tokenValidator, adminValidator], deleteCategory); 
router.put('/:id', [tokenValidator, adminValidator], updateCategory); 

module.exports = router; 
