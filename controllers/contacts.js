/*****************************************************************************
 *
 * Models
 *
 */
 const { Contacts } = require('../models/index');

 /*****************************************************************************
  *
  * Controller Activities
  *
  */

 const postContact = async (req, res) => {
   try {
     const newContact = {
      ...req.body
    }
    const contact = await Contacts.create(newContact);
 
     res.status(200).json({
       ok: true,
       data: contact,
     })

   } catch (error) {
     res.status(500).json({
       ok: false,
       msg: 'Unknown error, contact admin',
       error,
     });
   }
 }

module.exports = { postContact }