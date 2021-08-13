const {User} = require('../models/index');
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {

  try {

      await User.findAll({
        raw: true
      })
      .then(users => {
        users.forEach(user => {
          delete user.password
        });       
      
      return res.status(200).json({
        data: users,
        ok: true
      })
      })
  }
  catch (error) {
    res.status(500).json({
      data: error,
      ok: false
      })
  }
};

const registerUser = async (req, res) => {
    
    const userRegistered = await User.findOne({
        where: {email:req.body.email}
    })

    if(userRegistered) {
        return res.status(400).json({
          message: "The user is already registered.",
          ok: false
        });
    }

    try {

      const newUser = { ...req.body }
      newUser.password = await bcrypt.hashSync(newUser.password, 10);
        
      let user= await User.create(newUser);
      user = user.dataValues; 
      delete user.password;
      delete user.updatedAt; 
      delete user.createdAt; 

      res.status(200).json({
        data: user,
        ok: true
      })
        
    } catch (error) {
      res.status(500).json({
      data: error,
      ok: false
      })
    }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedAt = new Date();

  try {
    const isAdmin = await Role.findOne(
      { where: { id: req.user.roleId }, raw: true },
      { attributes: ['name'] },
    );

    /**
     * Logic of deleted
     * 1.- Delete self account
     * 2.- Admin deleted acaount
     */
    if (id !== req.user.id && isAdmin.name !== 'ADMIN') {
      return res.status(400).json({
        ok: false,
        date: 'You can not eliminate another user',
      });
    }

    // Update updated_At for logic delete account
    const [user] = await User.update({ deletedAt }, { where: { id } });
    if (user === 0) return res.status(400).json({ ok: false });

    res.json({
      ok: true,
      data: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

module.exports = {getAllUsers,  registerUser, deleteUser}
