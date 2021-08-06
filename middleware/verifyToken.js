require('dotenv').config(); 
const jwt = require('jsonwebtoken'); 

function verifyJWT(req, res, next, callback){
	const authHeader = req.headers.authorization; 
	const token = authHeader && authHeader.split(' ')[1]; 

	if (token == null) return res.status(401).send({ error: 'No autorizado' }); 
    
	jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
		callback(user, err)
		next(); 
	});
}

module.exports = verifyJWT; 