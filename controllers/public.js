/*****************************************************************************
 *
 * Models
 *
 */
 const { Public } = require('../models/index');

 //***** Public Controllers ******//
  
 const postPublic = async (req, res) => {
  try {
    
    const data = {
      ...req.body,
    }

    await Public.create(data);

    res.status(200).json({
      data,
      ok: true
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
}

const getPublicData = async (req, res) => {
  try {

    const data = await Public.findAll(
      { attributes: ['name', 'image', 'phone', 'address', 'welcomeText'] });

    res.json({
      ok: true,
      data: data 
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
};

module.exports = { postPublic,getPublicData }