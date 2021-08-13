const verifyToken = require('./verifyToken');

const verifyLogin = (req, res, next) => {
    const callback = (data, error) => {
        if (error) res.status(401).json({
            error: error, 
            ok: false
        })
        req.user = data; 
    }

    verifyToken(req,res,next,callback)
}

module.exports = verifyLogin;