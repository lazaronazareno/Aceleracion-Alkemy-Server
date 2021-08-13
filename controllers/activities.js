/*****************************************************************************
 *
 * Models
 *
 */
 const { Activities } = require('../models/index');

 /*****************************************************************************
  *
  * Controller Activities
  *
  */

 const postActivities = async (req, res) => {
   try {
     const newActivity = {
      ...req.body
    }
    const activity = await Activities.create(newActivity);
 
     res.status(200).json({
       ok: true,
       data: activity,
     })

   } catch (error) {
     res.status(500).json({
       ok: false,
       msg: 'Unknown error, contact admin',
       error,
     });
   }
 }
 
 module.exports = { postActivities }
 
 
 
 
 