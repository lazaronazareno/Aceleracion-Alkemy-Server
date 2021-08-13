const express = require('express');
const router = express.Router();
const validateRegister = require('../middleware/validate-register');
const verifyToken = require('../middleware/verifyToken');
const { getAllUsers, registerUser, deleteUser } = require('../controllers/users')

/* Get users listing. */
router.get('/', getAllUsers);

/* Post to create news users. */
router.post('/register', validateRegister, registerUser);

/* Route to delete users. */
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
