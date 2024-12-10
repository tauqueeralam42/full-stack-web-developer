/*
Function Definition
  function funcName(arg1,arg2..){
    // code
   }
*/

function hello() {
  console.log("Hello");
}

// Function Calling
hello(); // Output: Hello

/*
Function Expressions
const variable = function(arg1,arg2){
    //do work
}
*/

const sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 3)); // Output: 5

/*
Higher Order Functions
A function that does take one or more functions as arguments or return a function.
*/

let greet = function () {
  console.log("Hello");
};

function multipleGreet(func, count) {
  // higher order function
  for (let i = 0; i < count; i++) {
    func();
  }
}

multipleGreet(greet, 2); // Output: Hello (twice)

// Return a function

function oddEvenTest(req) {
  if (req == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (req == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}

let fun = oddEvenTest("even");
fun(3); // Output: false

fun = oddEvenTest("odd");
fun(3); // Output: true

fun = oddEvenTest("invalid"); // Output: wrong request

// Methods - Actions that can be performed on an object

const calculator = {
  num: 6,
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.sub(5, 3)); // Output: 2
console.log(calculator.mul(2, 3)); // Output: 6

// Arrow Functions

const helloArrow = () => {
  console.log("Hello");
};

helloArrow(); // Output: Hello

// Set Timeout
// setTimeout(function , timeout)

console.log("Hi there !"); // Output: Hi there !

setTimeout(() => {
  console.log("Hello");
}, 4000); // Output: Hello (after 4 seconds)

console.log("Welcome"); // Output: Welcome

// setInterval(function,timeout)

setInterval(() => {
  console.log("Hello there..!");
}, 2000); // Output: Hello there..! (every 2 seconds)
