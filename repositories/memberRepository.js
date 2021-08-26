const baseRepository = require('./baseRepository'); 

const entity = 'Member'; 

const getAll = async () => {
    try{
        const customQuery = {attributes: ['name', 'image']}
        const allMembers = await baseRepository.getAll(entity, customQuery); 
        return allMembers; 
    }catch(error){
        return ; 
    }
}

const getMember = async (toWhere) => {
    try{
        const member = await baseRepository.getByField(entity, toWhere); 
        return member; 
    }catch(error){
        return ; 
    }
}

const createMember = async (data) => {
    try{
        const categoryMember = await baseRepository.create(entity, data); 
        return categoryMember; 
    }catch(error){
        return ; 
    }
}

const destroyMember = async (id) => {
    try{
        const memberDeleted = await baseRepository.destroy(entity, id); 
        return memberDeleted; 
    }catch(error) {
        return ; 
    }
}

const updateMember = async (data,id) => {
    try {
        const memberUpdated = await baseRepository.update(entity, data,id); 
        return memberUpdated; 
    }catch(error){
        return ;
    }
}

module.exports = {
    getAll, getMember, destroyMember, updateMember, createMember
}