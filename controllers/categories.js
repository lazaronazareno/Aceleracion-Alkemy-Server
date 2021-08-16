const { Category } = require('../models/index');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({attributes: ['name']});

        return res.status(200).json({
            ok: true,
            data: categories
        });

    }catch(error){
        return res.status(400).json({
            ok:false, 
            error: error
        })
    }
}

module.exports = {
    getCategories
}