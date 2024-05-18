const student = {
    name : "Raj",
    age : 23,
    city : "Delhi"
};
student.city = "Pune";
student.gender = "Male";
student.marks = [12,43,56];
console.log(student);
delete student.marks;
console.log(student);