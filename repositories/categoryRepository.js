const baseRepository = require('./baseRepository'); 

const entity = 'Category'; 

const getAll = async () => {
    try{
        const customQuery = {attributes: ['name']}
        const allCategories = await baseRepository.getAll(entity, customQuery); 
        return allCategories; 
    }catch(error){
        return ; 
    }
}

const getCategory = async (toWhere) => {
    try{
        const category = await baseRepository.getByField(entity, toWhere); 
        return category; 
    }catch(error){
        return ; 
    }
}

const createCategory = async (data) => {
    try{
        const categoryCreated = await baseRepository.create(entity, data); 
        return categoryCreated; 
    }catch(error){
        return ; 
    }
}

const destroyCategory = async (id) => {
    try{
        const categoryDeleted = await baseRepository.destroy(entity, id); 
        return categoryDeleted; 
    }catch(error) {
        return ; 
    }
}

const updateCategory = async (data) => {
    try {
        const categoryUpdated = await baseRepository.update(entity, data); 
        return categoryUpdated; 
    }catch(error){
        return ;
    }
}

module.exports = {
    getAll, getCategory, destroyCategory, updateCategory, createCategory
}