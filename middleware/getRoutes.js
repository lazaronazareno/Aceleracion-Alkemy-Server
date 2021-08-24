const {Role} = require('../models/')

const getRoutes = async (req, res, next) => {
    				
    const publicRoutes = ['/nosotros','/actividades','/actividades/:id','/novedades','/novedades/:id',
                        '/testimonios','/testimonios/:id','/contacto','/contribuye']
    const privateRoutes = publicRoutes.concat(['/editUser', '/user']);
    				
    const routes = {
        Private: privateRoutes, 
        Admin: privateRoutes.concat(['/backoffice/usuarios','/backoffice/actividades',
                                    '/backoffice/actividades/:id','/backoffice/novedades',
                                    '/backoffice/novedades/:id', '/backoffice/testimonios',
                                    '/backoffice/testimonios/:id','/backoffice/contactos',
                                    '/backoffice/inicio'])
    }
    try {
        const { user } = req; 
        const rol = await Role.findOne({ where: { id: user.roleId } }); 
        const myRoutes = routes[rol.dataValues.name];
        user['routes'] = myRoutes
    }catch(error){
        req.user['routes'] = publicRoutes; 
        console.log('error')
    }
    next()
}

module.exports = getRoutes