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

const updateMembers = async (req, res) => {
  const { id } = req.params;
  const dataUpdated = req.body;

  try {
   
    const foundMembers = await Members.findByPk(id);

    if (!foundMembers) {
      return res.status(404).json({
        ok: false,
        msg: `No members found with id= ${id}`
      });
    }

    const memberUpdated = await foundMembers.update(dataUpdated);

    res.status(200).json({
      data: memberUpdated,
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

module.exports = {getAllMembers, saveMembers, updateMembers}
