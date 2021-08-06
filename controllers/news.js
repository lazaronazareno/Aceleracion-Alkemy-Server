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
      data: entries,
      ok: true
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
};

const postNews = async (req, res) => {
  try {
    const newEntry = {
      ...req.body,
      type: 'news'
    }

    await Entries.create(newEntry);

    res.status(200).json({
      data: newEntry,
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

const updateNews = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    // Busco por id
    const foundEntries = await Entries.findByPk(id);

    if (!foundEntries) {
      return res.status(404).json({
        ok: false,
        msg: `No entries found with id= ${id}`
      });
    }

    const updatedEntry = await foundEntries.update(updatedData);

    res.status(200).json({
      data: updatedEntry,
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

module.exports = { getNewsList, postNews, updateNews }



