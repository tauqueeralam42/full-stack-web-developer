//Arrays are Mutable in Js

// arr.push() - add to end;
// arr.pop() - delete from end return it;
// arr.unshift() - add to start;
// arr.shift() - delete from start and return it

let arr = [1,2,3,4];
console.log(arr);
arr.push(5);
console.log(arr);
console.log(arr.pop());
console.log(arr);
arr.unshift(0);
console.log(arr);

//arr.indexOf() - return index of something or -1;
//arr.includes() - search for value true/false;

//concat() - merge 2 arrays
let arr1 = [1,2,3];
let arr2 = ["hello", "a"];

console.log(arr1.concat(arr2));
console.log(arr1);

//slice() - copies a portion of an array
//slice(start,end);
//slice(-num) = slice(length -num);


//splice() - removes/replaces/add elements in original array
//splice(start,deleteCount,item0......itemN);

let colors = ["red","yellow","green","blue","brown"];
console.log(colors.splice(4));
console.log(colors.splice(0,0,"black","grey"));
console.log(colors);

//sort() - work on strings
let num = [7,99,87,200,1100];
console.log(num.sort());
console.log(num);

