// Strings are Immutable in JavaScript

// str.trim() - Remove the whitespaces from both ends of the string and return a new one without changing the original one.
let msg = "    Hello   ";
console.log(msg.trim()); // Output: "Hello"
console.log(msg); // Output: "    Hello   "

// str.toLowerCase() - Converts the entire string to lowercase.
let str = "Hello";
console.log(str.toLowerCase()); // Output: "hello"

// str.toUpperCase() - Converts the entire string to uppercase.
console.log(str.toUpperCase()); // Output: "HELLO"

// str.indexOf() - Returns the first index of occurrence of a value in the string. Returns -1 if not found.
console.log(str.indexOf("o")); // Output: 4
console.log(str.indexOf("llo")); // Output: 2
console.log(str.indexOf("z")); // Output: -1 (not found)

// slice() - Returns a part of the original string as a new string.
// slice(start, end) - Extracts from start index to end index (not inclusive).
console.log(str.slice(1, 4)); // Output: "ell"
console.log(str.slice(3)); // Output: "lo" (from index 3 to end)
console.log(str.slice(-2)); // Output: "lo" (from length-2 to end)

// str.replace("o", "x") - Searches a value in the string and returns a new string with the value replaced.
console.log(str.replace("o", "x")); // Output: "Hellx"

// str.repeat(3) - Returns a string with the number of copies of the original string.
console.log(str.repeat(3)); // Output: "HelloHelloHello"

// Additional examples:

// str.includes() - Checks if a string contains a specified value, returns true or false.
console.log(str.includes("ell")); // Output: true
console.log(str.includes("xyz")); // Output: false

// str.startsWith() - Checks if a string starts with a specified value, returns true or false.
console.log(str.startsWith("He")); // Output: true
console.log(str.startsWith("he")); // Output: false

// str.endsWith() - Checks if a string ends with a specified value, returns true or false.
console.log(str.endsWith("lo")); // Output: true
console.log(str.endsWith("Lo")); // Output: false

// str.charAt(index) - Returns the character at the specified index.
console.log(str.charAt(1)); // Output: "e"
console.log(str.charAt(4)); // Output: "o"

// str.split(separator) - Splits a string into an array of substrings based on a separator.
let sentence = "Hello World";
console.log(sentence.split(" ")); // Output: ["Hello", "World"]
console.log(sentence.split("")); // Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
