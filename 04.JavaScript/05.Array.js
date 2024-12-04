// Arrays are Mutable in Js

// arr.push() - add to end;
// arr.pop() - delete from end and return it;
// arr.unshift() - add to start;
// arr.shift() - delete from start and return it

let arr = [1, 2, 3, 4];
console.log(arr); // Output: [1, 2, 3, 4]

arr.push(5);
console.log(arr); // Output: [1, 2, 3, 4, 5]

console.log(arr.pop()); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4]

arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3, 4]

// arr.indexOf() - return index of something or -1;
// arr.includes() - search for value true/false;

// concat() - merge 2 arrays
let arr1 = [1, 2, 3];
let arr2 = ["hello", "a"];

console.log(arr1.concat(arr2)); // Output: [1, 2, 3, "hello", "a"]
console.log(arr1); // Output: [1, 2, 3]

// slice() - copies a portion of an array
// slice(start, end);
// slice(-num) = slice(length - num);

// splice() - removes/replaces/add elements in original array
// splice(start, deleteCount, item0, ..., itemN);

let colors = ["red", "yellow", "green", "blue", "brown"];
console.log(colors.splice(4)); // Output: ["brown"]
console.log(colors); // Output: ["red", "yellow", "green", "blue"]

console.log(colors.splice(0, 0, "black", "grey")); // Output: []
console.log(colors); // Output: ["black", "grey", "red", "yellow", "green", "blue"]

// sort() - works on strings
let num = [7, 99, 87, 200, 1100];
console.log(num.sort()); // Output: [1100, 200, 7, 87, 99] (sorts as strings)
console.log(num); // Output: [1100, 200, 7, 87, 99]
