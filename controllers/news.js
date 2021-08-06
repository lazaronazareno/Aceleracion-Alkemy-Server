/*****************************************************************************
 *
 * Models
 *
 */
const { Entries } = require('../models/index');

/*****************************************************************************
 *
 * Controller login
 *
 */

  const getNewsList = async (req, res) => {
    try {
      const entries = await Entries.findAll(
      { attributes: ['name', 'image', 'createdAt'] },
      { where: { type: 'news' }, raw: true });
     
      res.json({
        ok: true,
        entries,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: 'Unknown error, contact admin',
        error,
      });
    }
  };

  const postNews = async(req,res) => {
    try{
      const newEntry = {
        ...req.body,
        type: 'news' 
    }

    await Entries.create(newEntry); 

    res.status(200).json({
      data:newEntry,
      ok: true
    })
    }catch (error) {
      res.status(500).json({
        ok: false,
        msg: 'Unknown error, contact admin',
        error,
      });
    }
  } 
  
module.exports = {getNewsList, postNews }

 
  

