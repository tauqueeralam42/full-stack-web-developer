const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to render the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle form submission
app.post('/saveInfo', (req, res) => {
    const { name, city, state } = req.body;
    const info = `\nName: ${name}, City: ${city}, State: ${state}\n`;
    fs.appendFile('source.txt', info, (err) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Information saved successfully!');
        }
    });
});

// Route to handle duplicating data
app.get('/duplicate', (req, res) => {
    fs.readFile('source.txt', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            fs.writeFile('duplicate.txt', data, (err) => {
                if (err) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.send('File duplicated successfully!');
                }
            });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
