// Define an object 'student' with properties: name, age, and city
const student = {
  name: "Raj",
  age: 23,
  city: "Delhi",
};

// Update the 'city' property of the 'student' object
student.city = "Pune";

// Add a new property 'gender' to the 'student' object
student.gender = "Male";

// Add a new property 'marks' which is an array to the 'student' object
student.marks = [12, 43, 56];

// Log the 'student' object to the console
console.log(student);
// Output:
// {
//   name: 'Raj',
//   age: 23,
//   city: 'Pune',
//   gender: 'Male',
//   marks: [12, 43, 56]
// }

// Delete the 'marks' property from the 'student' object
delete student.marks;

// Log the 'student' object to the console again to see the changes
console.log(student);
// Output:
// {
//   name: 'Raj',
//   age: 23,
//   city: 'Pune',
//   gender: 'Male'
// }
// Accessing object properties using dot notation
console.log(student.name); // Output: Raj

// Accessing object properties using bracket notation
console.log(student['age']); // Output: 23

// Storing different data types in the object
student.isGraduated = true; // Boolean
student.address = { street: "MG Road", city: "Pune" }; // Object
student.hobbies = ["reading", "travelling"]; // Array
student.getDetails = function() { // Function
  return `${this.name}, ${this.age} years old, lives in ${this.city}`;
};

// Log the updated 'student' object to the console
console.log(student);
console.log(student.getDetails()); // Output: Raj, 23 years old, lives in Pune