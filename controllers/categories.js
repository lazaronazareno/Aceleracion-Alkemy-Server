const {categoryRepository} = require('../repositories')

const getCategories = async (req, res) => {
    try {
        const categories = await categoryRepository.getAll();
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

const createCategory = async (req, res) => {
    try{
        const categoryCreated = await Category.create(req.body)
        return res.status(200).json({
            ok: true, 
            data: categoryCreated
        }); 

    }catch(error){
        return res.status(400).json({
            ok: false,
            error: error
        }); 

    }
}

module.exports = {
    getCategories, createCategory
}