import express from 'express';

// Create an instance of an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for users and a variable to keep track of user IDs
let users = [];
let userId = 1;

// Route to create a new user
app.post("/user", (req, res) => {
    const { username, email } = req.body;
    const newUser = { id: userId++, username, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Route to get all users
app.get("/user", (req, res) => {
    res.status(200).json(users);
});

// Route to get a user by ID
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: `User with id ${id} not found` });
    }
});

// Route to update a user by ID
app.put("/user/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        res.status(404).json({ message: `User with id ${id} not found` });
    } else {
        const { username, email } = req.body;
        user.username = username;
        user.email = email;
        res.status(200).json(user);
    }
});

// Route to delete a user by ID
app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) {
        res.status(404).json({ message: `User with id ${id} not found` });
    } else {
        users.splice(index, 1);
        res.status(204).send();
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});
