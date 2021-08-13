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
   try{
       const role = await Roles.findOne({where: toWhere});
       if (req.user.roleId !== role.id) return res.status(403).json({
           ok:false,
           msg: 'Not authorized'
       });
       next()
   }catch(error){
       return res.status(500).json({
           ok: false, 
           msg: 'Unknow error, contact admin', 
           error: error
       });
   }
}

module.exports = verifyAdmin;