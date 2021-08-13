const { User, Role } = require('../models/index');

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

module.exports = {
  deleteUser,
};
