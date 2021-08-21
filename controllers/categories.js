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
        const categoryCreated = await categoryRepository.create(req.body);
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

const deleteCategory = async (req, res) => {
    const { id } = req.params; 

    try{
        const categoryDeleted = await categoryRepository.destroyCategory(id); 
        if (categoryDeleted === 0){
            return res.status(404).json({
                ok: false, 
                error: 'Category not found'
            }); 
        }
        return res.status(200).json({
            ok: true, 
            msg: `Category with id: ${id} successfully deleted!`
        }); 
    }catch(error){
        return res.status(500).json({
            ok: false, 
            error: error
        })
    }
}

module.exports = {
    getCategories, createCategory, deleteCategory
}