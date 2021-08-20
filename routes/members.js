const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { getAllMembers, saveMembers, updateMembers, deleteMembers } = require('../controllers/members')
=======
const { getAllMembers, saveMembers, updateMembers } = require('../controllers/members')
>>>>>>> develop
const validateMembers = require('../middleware/validate-members');

/* Get members listing. */
router.get('/', getAllMembers);

/* Post to save new members. */
router.post('/', validateMembers, saveMembers);

<<<<<<< HEAD
/* Put to update members. */
router.put('/:id', updateMembers);

/* Delete members. */
router.delete('/:id', deleteMembers)

=======
/* Put to edit and update members */
router.put('/:id', updateMembers);

>>>>>>> develop
module.exports = router;
