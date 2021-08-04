/*****************************************************************************
 *
 * Import packages
 *
 */
require('dotenv').config(); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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
    const user = await User.findOne({ where: { email }, raw: true });

    // Valido si existe en la BBDD
    if (!user) return res.status(404).json({ ok: false });

    // Valido si la contraseña ingresada es correcta
    const validadPassword = await bcrypt.compareSync(password, user.password);
    // Si no lo es devuelvo {ok: false}
    if (!validadPassword) return res.status(404).json({ ok: false });

    // Elimino la contraseña y la fecha de eliminación
    delete user.password;
    delete user.deletedAt;

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);

    // Retorno el token de sesión
    res.json({
      ok: true,
      token,
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
