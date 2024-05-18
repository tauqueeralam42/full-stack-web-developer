const express = require("express");
const fs = require("fs");
const app = express();


const usersData = require("./MOCK_DATA.json")

const PORT = 4000;

//Middleware
app.use(express.urlencoded({extended : false}));

//Home Route
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

//return html
app.get("/users", (req,res) => {
    const html = `
    <ul>
    ${usersData.map( (user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);
})


// Api route return json data
app.get("/api/users", (req,res) => {
        return res.json(usersData);
})


//Dynamic route -  :id
app.get("/api/users/:id", (req,res) => {
    const id = req.params.id;
    const user = usersData.find( (user) => user.id == id );
    return res.json(user);
})


//Post 
app.post('/api/users', (req, res) => {
    console.log(req.body);

    const username = req.body.username;
    const email = req.body.email;
    const body = req.body;

    usersData.push({...body, id : usersData.length +1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(usersData), (err, data) => {
        res.send(`Received user: ${username} with email: ${email} <br> User created successfully! with id ${usersData.length}`);
    });
 
});


app.listen(PORT, () => {
    console.log(`Server is running on Porn no. ${PORT}`);
})