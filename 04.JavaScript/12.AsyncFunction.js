// Example of an async function using async and await

// A function that returns a promise which resolves after 2 seconds
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Delay completed");
      resolve();
    }, ms);
  });
}

// An async function that waits for the delay function to complete
async function asyncFunction() {
  console.log("Start");

  // Await pauses the execution until the promise is resolved
  await delay(1000);

  console.log("End");
}

// Call the async function
asyncFunction();

// Explanation:
// 1. The `delay` function returns a promise that resolves after a specified number of milliseconds.
// 2. The `asyncFunction` is declared with the `async` keyword, which means it will return a promise.
// 3. Inside `asyncFunction`, the `await` keyword is used to pause the execution until the `delay` promise is resolved.
// 4. When `asyncFunction` is called, it logs 'Start', waits for 2 seconds, and then logs 'End'.

// Example of using try-catch with async/await and fetching data

async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Call the fetchData function with a sample URL
fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Explanation:
// 1. The `fetchData` function uses the `async` keyword to return a promise.
// 2. Inside the `fetchData` function, we use `try` and `catch` blocks to handle errors.
// 3. The `await` keyword is used to pause the execution
//    until the promise returned by `fetch` is resolved.
// 4. If the response is not ok, we throw an error.
// 5. The `await` keyword is used again to parse the JSON data from the response.
// 6. If there are any errors during the execution, they
//    will be caught by the `catch` block and logged to the console.

// Function to fetch data from a URL and return a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data has been fetched");
    }, 3000);
  });
}

// Function to simulate fetching comments with a delay and return a promise
function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, comment: "This is a comment" });
    }, 2000);
  });
}

// Async function to get data and comments using Promise.all
async function getDataAndComments() {
  try {
    console.log("Fetching data and comments...");
    const [data, comments] = await Promise.all([fetchData(), fetchComments()]);
    console.log("Data:", data);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error fetching data or comments:", error);
  }
}

// Call the async function
getDataAndComments();

// Explanation:
// 1. The `fetchData` function returns a promise that resolves after 3 seconds.
// 2. The `fetchComments` function returns a promise that resolves after 2 seconds.
// 3. The `getDataAndComments` function uses `Promise.all` to fetch data and comments concurrently.
// 4. The `await` keyword is used to wait for both promises to resolve.
// 5. If there are any errors during the execution, they
//    will be caught by the `catch` block and logged to the console.
