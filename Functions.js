/*
Function Definition
    function funcName(arg1,arg2..){
        // code
     }
*/

function hello(){
    console.log("Hello");
}

/*
Function Calling
     funcName();
*/
hello();


/*
Function Expressions
const variable = function(arg1,arg2){
      //do work
}
*/

const sum = function(a,b){
    return a+b;
};

console.log(sum(2,3));


/*
Higher Order Functions
A function that does take one or more functions as arguments or returna function.
*/

let greet = function(){
    console.log("Hello");
}

function multipleGreet(func , count){  // higer order function
    for(let i = 0; i<count; i++){
        func();
    }
}

multipleGreet(greet, 2);


//Return a function

function oddEvenTest(req){
    if(req == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(req == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }
    else{
        console.log("wrong request");
    }
}

let fun = oddEvenTest("even");
fun(3);


// Methods - Actions that can be performed on an object

const calculator = {
    num : 6,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};

console.log(calculator);