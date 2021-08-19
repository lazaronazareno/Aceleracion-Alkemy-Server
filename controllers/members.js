const {Members} = require('../models/index');

const getAllMembers = async (req, res) => {

  try {

      const members = await Members.findAll({attributes: ['name', 'image']});

      return res.status(200).json({
        data: members,
        ok: true
      })
  }
  catch (error) {
    res.status(500).json({
      data: error,
      ok: false
      })
  }
};

const saveMembers = async (req, res) => {
    
  try {

    const newMember = { ...req.body }

    let member = await Members.create(newMember);
    member = member.dataValues; 

    res.status(200).json({
      ok: true,
      data: member
    })
      
  } catch (error) {
    res.status(500).json({
    data: error,
    ok: false
    })
  }
};

module.exports = {getAllMembers, saveMembers}
