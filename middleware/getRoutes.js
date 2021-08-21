const {Role} = require('../models/')

const getRoutes = async (req, res, next) => {
    const privateRoutes = ['/', '/novedades', '/novedades/:id', '/editUser', '/user', '/contacto'];
    const routes = {
        Private: privateRoutes, 
        Admin: privateRoutes.concat(['/backoffice/novedades', '/backoffice/activities'])
    }
    try {
        const { user } = req; 
        const rol = await Role.findOne({ where: { id: user.roleId } }); 
        const myRoutes = routes[rol.dataValues.name];
        user['routes'] = myRoutes
    }catch(error){
        req.user['routes'] = []
        console.log('error')
    }
    next()
}

module.exports = getRoutes