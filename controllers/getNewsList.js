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
    const [entries] = await Entries.findAll(
      { attributes: ['name', 'image', 'createdAt'] },
      { where: { type: 'news' }, raw: true },
    );

    res.json({
      ok: true,
      entries,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error desconocido, contacte al administrador',
      error,
    });
  }
};

module.exports = {
  getNewsList,
};
