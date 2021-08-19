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

    const socialNetworks={ 
      instagram:'https://www.instagram.com',
      twitter:'https://twitter.com/',
      facebook:'https://facebook.com/',
      whatsapp:'https://web.whatsapp.com/'
    }

    const [public] = await Public.findAll(
      { attributes: ['name', 'image', 'phone', 'address', 'welcomeText'] });

      const publicSocialN = {
        ...public.dataValues,
        linkInstagram: socialNetworks.instagram,
        linkTwitter: socialNetworks.twitter,
        linkFacebook: socialNetworks.facebook,
        linkWhatsapp: socialNetworks.whatsapp
      }

    res.json({
      ok: true,
      data: publicSocialN
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