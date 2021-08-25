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

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const activity = await Activities.findByPk(id);
    if (!activity) {
      return res.status(404).json({
        ok: false,
        msg: `Activity with id: ${id} not found`,
        error: []
      })
    }
    const updatedActivity = await activity.update(data)
    return res.status(200).json({
      data: updatedActivity,
      ok: true
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error
    })
  }
}

const getActivities = async (req, res) => {
  try {
    const activitiesList = await Activities.findAll()

    res.json({
      ok: true,
      data: activitiesList
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
};

const getActivitiesById = async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await Activities.findByPk(id)

    res.status(200).json({
      ok: true,
      data: activity
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
}


module.exports = { postActivities, updateActivity, getActivities, getActivitiesById }




