const express = require('express');
const router = express.Router();
const { getAllMembers, saveMembers, updateMembers } = require('../controllers/members')
const validateMembers = require('../middleware/validate-members');

/* Get members listing. */
router.get('/', getAllMembers);

/* Post to save new members. */
router.post('/', validateMembers, saveMembers);

/* Put to edit and update members */
router.put('/:id', updateMembers);

module.exports = router;
