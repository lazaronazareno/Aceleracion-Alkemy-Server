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

const { getNewsList,postNews, updateNews, getNewsById , deleteNews} = require('../controllers/news')

/*****************************************************************************
 *
 * Routes
 *
 */
router.get('/', getNewsList); 

router.get('/:id', getNewsById); 

router.post('/',newsValidator, postNews); 

router.patch('/:id', updateNews); 

router.delete('/:id', deleteNews);

module.exports = router;
