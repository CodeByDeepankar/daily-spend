const express = require('express');
const router = express.Router();
const {
    getContacts,
    createContact
} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getContacts);
router.post('/', protect, createContact);

module.exports = router;
