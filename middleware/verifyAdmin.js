const db = require('../models');
const verifyToken = require('./verifyToken');
const Roles = require('../models/role')(db.sequelize, db.Sequelize)

const verifyAdmin = async(req, res, next) => {
    const toWhere = {
        name: 'Admin'
    };
    /* 
        FYI: I need define toWhere object for search in the database. 
        This can be generalized for repositories. 
    */
    const role = await Roles.findOne({where: toWhere});
    const callback = ( data, error) => {
        if (error||data.roleId !== role.id) return res.status(403).send('No autorizado');
    }

    verifyToken(req, res, next,callback)
}

module.exports = verifyAdmin;