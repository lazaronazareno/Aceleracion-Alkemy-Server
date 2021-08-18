const express = require('express');
const router = express.Router();
const { getAllMembers } = require('../controllers/members')

/* Get members listing. */
router.get('/', getAllMembers);

module.exports = router;
