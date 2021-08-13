const express = require('express');
const router = express.Router();

// Middleware
const verifyLogin = require('../middleware/verifyLogin');

//Controllers
const { deleteUser } = require('../controllers/users');

// Routers
router.delete('/:id', verifyLogin, deleteUser);

module.exports = router;
