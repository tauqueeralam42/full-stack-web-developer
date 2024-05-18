const express = require('express');
const app = express();

// Define a route to handle requests with two numbers in the URL
// http://localhost:3000/calculate/5/3?operation=add
app.get('/calculate/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const operation = req.query.operation;

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Invalid operation';
    }

    res.send(`Result of ${num1} ${operation} ${num2} is: ${result}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
