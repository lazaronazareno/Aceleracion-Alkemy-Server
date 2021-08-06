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

const { getNewsList,postNews } = require('../controllers/news')

/*****************************************************************************
 *
 * Routes
 *
 */
router.get('/', getNewsList); 

router.post('/',newsValidator, postNews); 

module.exports = router;
