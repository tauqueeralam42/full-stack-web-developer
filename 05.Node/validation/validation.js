const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home route to serve HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware for validation
app.post('/validate', (req, res) => {
    const { name, regNo, rollNo, mobileNo, email } = req.body;

    // Validation rules
    if (!name || !regNo || !rollNo || !mobileNo || !email) {
        return res.json({ success: false, message: 'All fields are required.' });
    }

    if (name.length < 3 || name.length > 50) {
        return res.json({ success: false, message: 'Name should be between 3 and 50 characters.' });
    }

    // Add more validation rules for other fields...

    // If all validations pass, send success response
    res.json({ success: true });
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
