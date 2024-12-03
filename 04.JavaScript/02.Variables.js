// JavaScript Variables

// 1. var
// The 'var' keyword is used to declare a variable. It has function scope and can be re-declared and updated.
var name = "John";
console.log(name); // Output: John

var name = "Doe"; // Re-declaration is allowed
console.log(name); // Output: Doe

name = "Jane"; // Update is allowed
console.log(name); // Output: Jane

// 2. let
// The 'let' keyword is used to declare a variable. It has block scope and can be updated but not re-declared within the same scope.
let age = 25;
console.log(age); // Output: 25

age = 30; // Update is allowed
console.log(age); // Output: 30

// let age = 35; // Re-declaration is not allowed within the same scope (Uncommenting this line will cause an error)

// 3. const
// The 'const' keyword is used to declare a constant variable. It has block scope and cannot be updated or re-declared.
const birthYear = 1990;
console.log(birthYear); // Output: 1990

// birthYear = 1995; // Update is not allowed (Uncommenting this line will cause an error)

// const birthYear = 2000; // Re-declaration is not allowed (Uncommenting this line will cause an error)

// Differences between var, let, and const:
// - 'var' has function scope, while 'let' and 'const' have block scope.
// - 'var' can be re-declared and updated, 'let' can be updated but not re-declared, and 'const' can neither be updated nor re-declared.
// - 'const' must be initialized at the time of declaration, while 'var' and 'let' can be declared without initialization.

// Example of block scope with 'let' and 'const'
{
    let blockScopedLet = "I am block scoped";
    const blockScopedConst = "I am also block scoped";
    console.log(blockScopedLet); // Output: I am block scoped
    console.log(blockScopedConst); // Output: I am also block scoped
}

// console.log(blockScopedLet); // Error: blockScopedLet is not defined (Uncommenting this line will cause an error)
// console.log(blockScopedConst); // Error: blockScopedConst is not defined (Uncommenting this line will cause an error)