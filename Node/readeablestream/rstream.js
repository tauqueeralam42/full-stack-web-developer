const express = require('express');
const fs = require('fs');

const app = express();

// Define a route to handle client requests
app.get('/employees', (req, res) => {
    // Create a readable stream from the employee.txt file
    const readableStream = fs.createReadStream('employee.txt', 'utf8');

    // Read the data from the stream and send it as a response
    readableStream.on('data', (data) => {
        res.write(data); // Write data to the response
    });

    // Handle end of stream
    readableStream.on('end', () => {
        res.end(); // End the response
    });

    // Handle errors
    readableStream.on('error', (err) => {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
