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

  
const deletePublic = async (req, res) => {
  const {id} = req.params;
  console.log('busco el id de params',id)
  try {
    foundOrg = await Public.findByPk(id);
    console.log('foundOrg',foundOrg)
    if (!foundOrg) {
      return res.status(404).json({
        ok: false,
        msg: `No organizations found with id = ${id}`
      });
    }

    await Public.destroy({where:{id}})
    
    res.json({
      ok: true,
      msg:`Object with id:${id} succesfully deleted` 
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }}


module.exports = { postPublic,getPublicData,deletePublic }