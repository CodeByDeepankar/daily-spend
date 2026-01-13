const Contact = require('../models/Contact');

// @desc    Get contacts
// @route   GET /api/contacts
// @access  Private
const getContacts = async (req, res) => {
    try {
        // User requested "view all submited users data", assuming authorized user can see all.
        const contacts = await Contact.find().sort({ createdAt: -1 });

        const formattedContacts = contacts.map(contact => {
            // Mask Email
            let maskedEmail = contact.email;
            if (contact.email.includes('@')) {
                const [local, domain] = contact.email.split('@');
                if (local.length > 4) {
                    maskedEmail = `${local.substring(0, 4)}****${domain}`;
                } else {
                    maskedEmail = `${local.substring(0, 1)}****${domain}`;
                }
            }

            // Time Ago
            const now = new Date();
            const diffInSeconds = Math.floor((now - new Date(contact.createdAt)) / 1000);
            let submitted;

            if (diffInSeconds < 60) {
                submitted = 'recently';
            } else if (diffInSeconds < 3600) {
                submitted = `${Math.floor(diffInSeconds / 60)} m ago`;
            } else if (diffInSeconds < 86400) {
                submitted = `${Math.floor(diffInSeconds / 3600)} h ago`;
            } else {
                submitted = `${Math.floor(diffInSeconds / 86400)} d ago`;
            }

            return {
                name: contact.name,
                service: contact.service,
                message: contact.message,
                email: maskedEmail,
                submitted: `submitted ${submitted}`
            };
        });

        res.status(200).json(formattedContacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create contact
// @route   POST /api/contacts
// @access  Private
const createContact = async (req, res) => {
    try {
        const { name, email, service, message } = req.body;

        if (!name || !email || !service || !message) {
            return res.status(400).json({ message: 'Please add all required fields' });
        }

        const contact = await Contact.create({
            userId: req.user.id,
            name,
            email,
            service,
            message
        });

        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getContacts,
    createContact
};
