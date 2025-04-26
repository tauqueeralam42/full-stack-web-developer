const fs = require('fs');

// Function to check if a number is prime
function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Create a writable stream to write prime numbers to a file
const writableStream = fs.createWriteStream('sample.txt');

writableStream.on('finish', () => {
    console.log('Task Completed');
});

// Write prime numbers up to 100 to the file
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        writableStream.write(`${i}\n`);
    }
}

// Close the writable stream
writableStream.end();
