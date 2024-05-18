const { log } = require("console");
const fs = require("fs");

// //Sync...
// fs.writeFileSync("./test.txt", "Hello World Sync");

// //Async
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});


// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

fs.readFile("./test.txt", "utf-8", (err, result) =>{
    if(err){
        console.log("Error", err);
    }else{
        console.log(result);
    }
});