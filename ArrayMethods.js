
//forEach
//arr.forEach(some function definition);

let arr = [1,2,3,4,5];

arr.forEach((el)=>{
    console.log(el);
});



//Map - return new array
// let newArr = arr.map(some function);

let newArr = arr.map((el)=>{
    return 2*(el);
});
console.log(newArr);


/*
Filter - return new array if callback is true then add that value in array if not then not
let newArr = arr.filter(some function);
*/

let even = arr.filter((num)=>{
    return num%2 == 0;
});
console.log(even);


/*
Every - Returns true if every elemet of array gives true for some fuction else return false.
arr.every(some function);
*/

console.log(arr.every((el) => (el%2==0)));


/*
Some - Return true if some elements of array gives true for given function else return false
arr.some((el) => (el % 2 == 0));
*/


//Reduce - Reduce the array to single value
// arr.reduce(reducer function with 2 variables for(accumulator,element));

let ans = [1,2,3,4,5].reduce((res,el)=>{
    return res+el;
});
console.log(ans);


//Spread - expands an iterable into multiple values  ...
console.log(..."hello");
let ch = [..."hello"];
console.log(ch);

let data = {
    email : "abc@gmail.con",
    pass : "abc"
};
console.log({...data, id : 23});
console.log({...arr});


//Rest - Allows a function to take an idenfinite number of arguments and bundle then in an array

function print(...args){
    for(el of args)
        console.log(el);
};

print(1,2,3,4,5,6,7,8,9);