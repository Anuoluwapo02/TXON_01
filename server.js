
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve portfolio files
app.use(express.static(__dirname));

// Handle contact form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all fields.'
        });
    }

    console.log('New Message Received:');
    console.log({ name, email, message });

    res.status(200).json({
        success: true,
        message: 'Message Received!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
