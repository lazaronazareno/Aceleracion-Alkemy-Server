const db = require('../models'); 

const getAll = async (entity, customQuery=null) => {
    console.log('en base')
    try{
        const allRows = await db[entity].findAll(customQuery); 
        console.log(allRows)
        return allRows; 
    }catch(error){
        console.log(error)
        return; 
    }
}

const create = async (entity, data={}) => {
    try {
        const rowCreated = await db[entity].create(data); 
        return rowCreated; 
    }catch(error){
        return; 
    }
}

const destroy = async (entity, id) => {
    try{
        const rowDeleted = await db[entity].destroy({where: {id:id}}); 
        console.log('rowDeleted',rowDeleted)
        return rowDeleted; 
    }catch(error){
        return; 
    }
}

const update = async (entity, id,data) => {
    try{
        const rowUpdated = await db[entity].update(data,{where: {id:id}}); 
        return rowUpdated; 
    }catch(error){
        return; 
    }
}

const getByField = async (entity, toWhere) => {
    try{
        const row = await db[entity].findOne({where: toWhere}); 
        return row
    }catch(error){
        return ;
    }

}



module.exports = {
    getAll, create, destroy, update, getByField
}