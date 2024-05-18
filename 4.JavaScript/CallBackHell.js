function savetoDB(data , success, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 5){
        success();
    }else{
        failure();
    }
}

savetoDB("Hello",
    ()=>{
        console.log("Success1 : Your data is saved");
        savetoDB("Hello",
        ()=>{
            console.log("Success 2");
            savetoDB("Hello",
            () =>{
                console.log("Success 3");
            },
            ()=>{
                console.log("Failure 3");
            }
            );
        },
        ()=>{
            console.log("Failure 2");
        });
    },
    ()=>{
        console.log("Failure 1: Your data is not saved");
    }
);