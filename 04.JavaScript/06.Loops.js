// 1. For Loop
// The for loop is used when you know in advance how many times you want to execute a statement or a block of statements.
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}
// Explanation: This loop will run 5 times, with the variable `i` taking values from 0 to 4.

// 2. While Loop
// The while loop is used when you want to execute a block of code as long as a specified condition is true.
let j = 0;
while (j < 5) {
    console.log("While Loop iteration:", j);
    j++;
}
// Explanation: This loop will run 5 times, with the variable `j` taking values from 0 to 4.

// 3. Do-While Loop
// The do-while loop is similar to the while loop, but it will execute the block of code once before checking the condition.
let k = 0;
do {
    console.log("Do-While Loop iteration:", k);
    k++;
} while (k < 5);
// Explanation: This loop will run 5 times, with the variable `k` taking values from 0 to 4. It guarantees at least one execution.

// 4. For-In Loop
// The for-in loop is used to iterate over the properties of an object.
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log("For-In Loop key:", key, "value:", obj[key]);
}
// Explanation: This loop will iterate over the keys of the object `obj` and log each key-value pair.

// 5. For-Of Loop
// The for-of loop is used to iterate over the values of an iterable object (like an array or a string).
const arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log("For-Of Loop value:", value);
}
// Explanation: This loop will iterate over the values of the array `arr` and log each value.


// 6. ForEach Loop
// The forEach loop is used to execute a provided function once for each array element.
arr.forEach((value, index) => {
    console.log("ForEach Loop index:", index, "value:", value);
});
// Explanation: This loop will iterate over the values of the array `arr` and log each index-value pair.

// Output for the ForEach loop:
// ForEach Loop index: 0 value: 10
// ForEach Loop index: 1 value: 20
// ForEach Loop index: 2 value: 30
// ForEach Loop index: 3 value: 40
// ForEach Loop index: 4 value: 50

// 7. For-In Loop with Array
// The for-in loop can also be used to iterate over the indices of an array.
for (let index in arr) {
    console.log("For-In Loop with Array index:", index, "value:", arr[index]);
}
// Explanation: This loop will iterate over the indices of the array `arr` and log each index-value pair.

// Output for the For-In loop with array:
// For-In Loop with Array index: 0 value: 10
// For-In Loop with Array index: 1 value: 20
// For-In Loop with Array index: 2 value: 30
// For-In Loop with Array index: 3 value: 40
// For-In Loop with Array index: 4 value: 50

// 8. For-Of Loop with String
// The for-of loop can also be used to iterate over the characters of a string.
const str = "hello";
for (let char of str) {
    console.log("For-Of Loop with String char:", char);
}
// Explanation: This loop will iterate over the characters of the string `str` and log each character.

// Output for the For-Of loop with string:
// For-Of Loop with String char: h
// For-Of Loop with String char: e
// For-Of Loop with String char: l
// For-Of Loop with String char: l
// For-Of Loop with String char: o