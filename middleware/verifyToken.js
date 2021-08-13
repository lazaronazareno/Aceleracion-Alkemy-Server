// require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      ok: false,
      data: 'Token is required',
    });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token',
    });
  }
};

module.exports = verifyJWT;
