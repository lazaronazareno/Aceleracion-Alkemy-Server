/*****************************************************************************
 *
 * Import packages
 *
 */
const bcrypt = require('bcryptjs');

/*****************************************************************************
 *
 * Models
 *
 */
const { User } = require('../models/index');

/*****************************************************************************
 *
 * Controller login
 *
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busco el usuario por el mail
    const [user] = await User.findAll({ where: { email }, raw: true });

    // Valido si existe en la BBDD
    if (!user) return res.status(404).json({ ok: false });

    // Valido si la contraseña ingresara es correcta
    const validadPasswprd = bcrypt.compareSync(password, user.password);
    // Si no lo es devuelvo {ok: false}
    if (!validadPasswprd) return res.status(404).json({ ok: false });

    // Elimino la contraseña y la fecha se eliminación
    delete user.password;
    delete user.deletedAt;

    // Retorno el usuario
    res.json({
      ok: true,
      user,
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
  login,
};
