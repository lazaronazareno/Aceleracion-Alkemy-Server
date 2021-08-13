const { check, validationResult } = require('express-validator');

const validateRegister = async (req, res, next) => {
    await check('firstName', 'This field cannot be empty').notEmpty().run(req);
    await check('lastName', 'This field cannot be empty').notEmpty().run(req);
    await check('email', 'This field cannot be empty').notEmpty().isEmail().bail().run(req);
    await check('password', 'password must be at least 8 characters long').notEmpty().isLength({min: 8}).run(req);
  
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: result.mapped(),});
    } 
    next()
};

module.exports = validateRegister;
