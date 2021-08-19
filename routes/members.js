const express = require('express');
const router = express.Router();
const { getAllMembers, saveMembers } = require('../controllers/members')
const validateMembers = require('../middleware/validate-members');

/* Get members listing. */
router.get('/', getAllMembers);

/* Post to save new members. */
router.post('/', validateMembers, saveMembers);

module.exports = router;
