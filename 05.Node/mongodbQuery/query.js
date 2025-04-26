const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
// /query?mileageThreshold=25
mongoose.connect('mongodb://localhost:27017/carDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');

        // Define a schema for cars collection
        const carSchema = new mongoose.Schema({
            Model: String,
            Company: String,
            Mileage: Number,
            Color: String,
            Owner: String
        });

        // Create Car model based on the schema
        const Car = mongoose.model('Car', carSchema);

        // Add data to the cars collection
        const cars = [
            { Model: 'Corolla', Company: 'Toyota', Mileage: 25, Color: 'White', Owner: 'John' },
            { Model: 'Civic', Company: 'Honda', Mileage: 30, Color: 'Black', Owner: 'Alice' },
            { Model: 'Camry', Company: 'Toyota', Mileage: 28, Color: 'Blue', Owner: 'Bob' },
            { Model: 'Accord', Company: 'Honda', Mileage: 32, Color: 'Red', Owner: 'Eve' },
        ];
        await Car.insertMany(cars);
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

// Route to query cars collection for cars with mileage greater than specified value
app.get('/query', async (req, res) => {
    try {
        const mileageThreshold = parseInt(req.query.mileageThreshold);
        const Car = mongoose.model('Car');
        const cars = await Car.find({ Mileage: { $gt: mileageThreshold } });
        console.log('Cars with mileage greater than', mileageThreshold, ':');
        console.log(cars);
        res.send(`<pre>${JSON.stringify(cars, null, 2)}</pre>`); // Displaying data on screen
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
