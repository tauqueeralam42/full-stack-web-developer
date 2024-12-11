// Promise - The promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.

// Function to simulate saving data to a database
function savetoDB(data) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // Simulate internet speed with a random number between 1 and 10
            let internetSpeed = Math.floor(Math.random() * 10) + 1;
            // If internet speed is greater than 4, resolve the promise
            if (internetSpeed > 4) {
                resolve(`Success: ${data} is saved`);
            } else {
                // Otherwise, reject the promise
                reject("Failure: data is not saved");
            }
        }, 2000); // Simulate a delay of 2 seconds
    });
}

// Example usage of the savetoDB function
let request = savetoDB("hello"); // request is a promise object
console.log(request);

request
    .then((result) => {
        // This block runs if the promise is resolved
        console.log("Data 1 is saved ->", result);
        // Return another promise to chain the next then block
        return savetoDB("World");
    })
    .then((result) => {
        // This block runs if the second promise is resolved
        console.log("Data 2 is saved ->", result);
        // Return another promise to chain the next then block
        return savetoDB("Hello world");
    })
    .then((result) => {
        // This block runs if the third promise is resolved
        console.log("Data 3 is saved ->", result);
    })
    .catch((err) => {
        // This block runs if any of the promises are rejected
        console.warn("Fail ->", err);
    });

// Example outputs:
// If all promises are resolved:
// Data 1 is saved Success: data is saved
// Data 2 is saved Success: data is saved
// Data 3 is saved Success: data is saved

// If any promise is rejected (e.g., internet speed <= 4):
// Failure Failure: data is not saved