const { check, validationResult } = require('express-validator');

const validateMembers = async (req, res, next) => {
    await check('name', 'El nombre no puede estar vacío y debe ser texto.').notEmpty().isString().run(req);
    
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: result.mapped(),});
    } 
    next()
};

module.exports = validateMembers;
