/**
 * Function to simulate saving data to a database.
 * This function demonstrates the concept of "callback hell," which occurs when multiple nested callbacks are used,
 * making the code difficult to read and maintain.
 *
 * @param {string} data - The data to be saved.
 * @param {function} success - The callback function to be called on successful save.
 * @param {function} failure - The callback function to be called on failed save.
 */

// Callback Hell
// The following example demonstrates the concept of "callback hell," which occurs when multiple nested callbacks are used,
// making the code difficult to read and maintain.



// Function to simulate saving data to a database
function savetoDB(data, success, failure) {
  // Simulate internet speed as a random number between 1 and 10
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  // If internet speed is greater than 5, call the success callback
  if (internetSpeed > 5) {
    success();
  } else {
    // Otherwise, call the failure callback
    failure();
  }
}

// Call the savetoDB function with data and success/failure callbacks
savetoDB(
  "Hello", // Data to be saved
  () => {
    console.log("Success 1: Your data is saved"); // Success callback for the first call
    // Nested call to savetoDB within the success callback
    savetoDB(
      "Hello", // Data to be saved again
      () => {
        console.log("Success 2"); // Success callback for the second call
        // Another nested call to savetoDB within the second success callback
        savetoDB(
          "Hello", // Data to be saved again
          () => {
            console.log("Success 3"); // Success callback for the third call
          },
          () => {
            console.log("Failure 3"); // Failure callback for the third call
          }
        );
      },
      () => {
        console.log("Failure 2"); // Failure callback for the second call
      }
    );
  },
  () => {
    console.log("Failure 1: Your data is not saved"); // Failure callback for the first call
  }
);

