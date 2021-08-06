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

        const newUser ={
            name : req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }
        newUser.password = await bcrypt.hashSync(newUser.password, 10);
        
        await User.create(newUser);

        delete newUser.password

        res.status(200).json({
            data: newUser,
            ok: true
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