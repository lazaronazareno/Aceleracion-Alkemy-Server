const {memberRepository} = require('../repositories')

const getAllMembers = async (req, res) => {

  try {

      const members = await memberRepository.getAll();
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

    const member = await memberRepository.create(newMember);

    res.status(200).json({
      ok: true,
      data: member.dataValues
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
   
    const foundMembers = await memberRepository.getMember({id:id});

    if (!foundMembers) {
      return res.status(404).json({
        ok: false,
        msg: `No members found with id= ${id}`
      });
    }

    const memberUpdated = await memberRepository.updateMember(dataUpdated, id);

    res.status(200).json({
      data: memberUpdated.dataValues,
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

const deleteMembers = async (req, res) => {
  const {id} = req.params;
  
  try {
    const foundMembers = await memberRepository.getMember({id:id});
    if (!foundMembers) {
      return res.status(404).json({
        ok: false,
        msg: `No members found with id = ${id}`
      });
    }

    await memberRepository.destroyMember(id)
    
    res.json({
      ok: true,
      msg:`Member with id:${id} succesfully deleted` 
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }}

module.exports = {getAllMembers, saveMembers, updateMembers, deleteMembers}
