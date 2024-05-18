//Promise - The promise object represent the eventual completion or failure of an asynchronous operation and its resulting value.

function savetoDB(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Success : data is saved");
        }else{
            reject("Failure : data is not saved");
        }
    });
};

let request = savetoDB("hello"); // req = promise object

request
.then((result)=>{
    console.log("Data 1 is saved " , result);
    return savetoDB("World");
})
.then((result)=>{
    console.log("Data 2 is saved " , result);
    return savetoDB("Hello world");
})
.then((result)=>{
    console.log("Data 3 is saved " , result);
})
.catch((err)=>{
    console.log("Failure ", err);
});