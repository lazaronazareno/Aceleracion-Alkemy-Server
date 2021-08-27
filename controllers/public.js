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
    const socialNetworks={ 
      instagram:'https://www.instagram.com',
      twitter:'https://twitter.com/',
      facebook:'https://facebook.com/',
      whatsapp:'https://web.whatsapp.com/'
    }

    const publico = await Public.findAll(
      { attributes: ['name', 'image', 'phone', 'address', 'welcomeText'] });

    const publicSocialN = {
      ...publico.dataValues,
      linkInstagram: socialNetworks.instagram,
      linkTwitter: socialNetworks.twitter,
      linkFacebook: socialNetworks.facebook,
      linkWhatsapp: socialNetworks.whatsapp,
    }

    res.json({
      ok: true,
      data: public,
      routes: publicRoutes
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