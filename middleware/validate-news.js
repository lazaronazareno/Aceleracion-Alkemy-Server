const { check, validationResult } = require('express-validator');

const newsValidator = async (req, res, next) => {
    await check('name').notEmpty().run(req);
    await check('content').notEmpty().run(req);
    await check('image').notEmpty().run(req);
    await check('categoryId').notEmpty().run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({errors: result.array()});
    } 
    next()
};

module.exports = newsValidator; 