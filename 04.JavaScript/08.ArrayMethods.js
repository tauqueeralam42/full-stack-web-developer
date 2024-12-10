// forEach - Executes a provided function once for each array element
let arr = [1, 2, 3, 4, 5];
arr.forEach((el) => {
  console.log(el); // Output: 1 2 3 4 5 (each on a new line)
});

// Map - Creates a new array with the results of calling a provided function on every element in the calling array
let newArr = arr.map((el) => {
  return 2 * el;
});
console.log(newArr); // Output: [2, 4, 6, 8, 10]

/*
Filter - Creates a new array with all elements that pass the test implemented by the provided function
*/
let even = arr.filter((num) => {
  return num % 2 == 0;
});
console.log(even); // Output: [2, 4]

/*
Every - Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/
console.log(arr.every((el) => el % 2 == 0)); // Output: false (not all elements are even)

/*
Some - Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
*/
console.log(arr.some((el) => el % 2 == 0)); // Output: true (at least one element is even)

// Reduce - Executes a reducer function on each element of the array, resulting in a single output value
let ans = [1, 2, 3, 4, 5].reduce((res, el) => {
  return res + el;
});
console.log(ans); // Output: 15

// Spread - Expands an iterable (like an array or string) into individual elements
console.log(..."hello"); // Output: h e l l o (each character separated by a space)
let ch = [..."hello"];
console.log(ch); // Output: ['h', 'e', 'l', 'l', 'o']

let data = {
  email: "abc@gmail.com",
  pass: "abc",
};
console.log({ ...data, id: 23 }); // Output: { email: 'abc@gmail.com', pass: 'abc', id: 23 }
console.log({ ...arr }); // Output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// Rest - Allows a function to accept an indefinite number of arguments as an array
function print(...args) {
  for (el of args) console.log(el);
}
print(1, 2, 3, 4, 5, 6, 7, 8, 9); // Output: 1 2 3 4 5 6 7 8 9 (each on a new line)
