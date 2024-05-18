
    console.log("Timmer : ");


let counter = 1;
const intervalInMilliseconds = 1000; 

function TimmerFunction() {
    console.log(`Timmer Time (${counter} seconds)`);
    counter++;
}

const intervalId = setInterval(TimmerFunction, 1000);


setTimeout(() => {
    clearInterval(intervalId);
    console.log("Timmer stopped after 100 seconds.");
}, 110000);
