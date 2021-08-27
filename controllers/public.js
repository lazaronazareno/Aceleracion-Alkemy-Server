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
    const publicRoutes = ['/nosotros','/actividades','/actividades/:id','/novedades','/novedades/:id',
                        '/testimonios','/testimonios/:id','/contacto','/contribuye',
                        '/login', '/register']
    
    const publico = await Public.findOne({
      where: {name:'Somos Mas'}})
        res.json({
        ok: true,
        data: publico,
        routes: publicRoutes
        });
    }catch (error) {
      res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
      });
    }
  };

module.exports = { postPublic,getPublicData }