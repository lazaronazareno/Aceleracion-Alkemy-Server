
const { check, validationResult } = require('express-validator');

const activitiesValidator = async (req, res, next) => {

    await check('name', 'This field cannot be empty').notEmpty().run(req);
    await check('content', 'This field cannot be empty').notEmpty().run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: result.mapped(),});
    } 
    next()
};

module.exports = activitiesValidator;