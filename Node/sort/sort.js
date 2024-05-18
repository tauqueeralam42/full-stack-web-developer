const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();



// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Home route to render the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route to handle the sorting operation
app.post('/sort', (req, res) => {
    const values = req.body.values.split(',').map(Number);
    const sortedValues = values.sort((a, b) => a - b);
    res.send(sortedValues.toString());
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
