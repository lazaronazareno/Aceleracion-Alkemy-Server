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

 const newsValidator  = require ('../middleware/validate-news') 

/*****************************************************************************
 *
 * Controller
 *
 */

const { getNewsList,postNews, updateNews } = require('../controllers/news')

/*****************************************************************************
 *
 * Routes
 *
 */
router.get('/', getNewsList); 

router.post('/',newsValidator, postNews); 

router.patch('/:id', updateNews); 

module.exports = router;
