const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port no. 3000")
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Todos')
.then( () => {
    console.log('Database is created');
})
.catch((err) => {
    console.log(err);
});



const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            require:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

const Todo = mongoose.model("Todo", todoSchema);

app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
})

app.post('/todos', async (req,res) => {
    try{
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        });
    }
})