//Strings are Immutable in Js

//str.trim() - Remove the whitespaces from both end of string and return a new one not chng in original one.
let msg = "    Hello   ";
console.log(msg.trim());
console.log(msg);

//str.toLowerCase();
//str.toUpperCase();
let str = "Hello";
console.log(str.toLowerCase());
console.log(str.toUpperCase());


//str.indexOf() - Return the first index of occurrence of some value in string. Or give -1 if not fount.
console.log(str.indexOf("o"));
console.log(str.indexOf("llo"));

//slice() - Returns the part of the original string as a new string.
//slice(start,end);
//slice(-num) = slice(length -num);
console.log(str.slice(3));


//str.replace("o",'x) - searches a value in the string and return a new string with the value replaced.
console.log(str.replace("o","x"));


//str.repeat(3) - Returns a string with the number of copies of a string
console.log(str.repeat(3));