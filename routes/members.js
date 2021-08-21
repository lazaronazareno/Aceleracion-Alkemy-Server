const express = require('express');
const router = express.Router();
const { getAllMembers, saveMembers, updateMembers, deleteMembers } = require('../controllers/members')
const validateMembers = require('../middleware/validate-members');

/* Get members listing. */
router.get('/', getAllMembers);

/* Post to save new members. */
router.post('/', validateMembers, saveMembers);

/* Put to update members. */
router.put('/:id', updateMembers);

/* Delete members. */
router.delete('/:id', deleteMembers)

module.exports = router;
