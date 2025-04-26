const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/houseDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a schema for the House collection
const houseSchema = new mongoose.Schema({
    Hno: Number,
    rooms: Number,
    furniture: String,
    rent: Number
});

// Create House model based on the schema
const House = mongoose.model('House', houseSchema);

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission and save data in MongoDB
app.post('/addHouse', async (req, res) => {
    try {
        const { Hno, rooms, furniture, rent } = req.body;
        const newHouse = new House({ Hno, rooms, furniture, rent });
        await newHouse.save();
        res.send('House added successfully!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to sort houses by Hno and display them
app.get('/sortHouses', async (req, res) => {
    try {
        const houses = await House.find().sort({ Hno: 1 });
        res.json(houses);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
