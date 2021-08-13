const bcrypt = require('bcryptjs');
const {User} = require('../models/index');

const registerUser = {
    index: (req, res) => {
        res.send('To test routes')
    },
    save: async (req, res) => {

    const userRegistered = await User.findOne({
        where: {email:req.body.email}
    })

    if(userRegistered) {
        return res.status(400).json({
            message: "The user is already registered.",
            ok: false
        });
    }

    try {

        const newUser = { ...req.body }
        newUser.password = await bcrypt.hashSync(newUser.password, 10);
        
        let user= await User.create(newUser);
        user = user.dataValues; 
        delete user.password;
        delete user.updatedAt; 
        delete user.createdAt; 

        res.status(200).json({
            ok: true,
            data: user,
        })
        
    } catch (error) {
        res.status(500).json({
            data: error,
            ok: false
        })
    }
    }
}
module.exports = registerUser;