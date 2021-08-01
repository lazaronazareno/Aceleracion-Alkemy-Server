const { check, validationResult } = require('express-validator');

const validateRegister = async (req, res, next) => {
    await check('name').notEmpty().run(req);
    await check('lastname').notEmpty().run(req);
    await check('email').notEmpty().isEmail().bail().run(req);
    await check('password').notEmpty().isLength({min: 8}).run(req);
  
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({errors: result.array()});
    }
    next()
};

module.exports = validateRegister;
