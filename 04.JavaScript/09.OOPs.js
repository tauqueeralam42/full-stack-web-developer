// Vehicle class
class Vehicle {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    // Getter for make
    get make() {
        return this._make;
    }

    // Setter for make
    set make(value) {
        this._make = value;
    }

    // Getter for model
    get model() {
        return this._model;
    }

    // Setter for model
    set model(value) {
        this._model = value;
    }

    // Getter for year
    get year() {
        return this._year;
    }

    // Setter for year
    set year(value) {
        this._year = value;
    }

    displayDetails() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

    destroy() {
        console.log('Vehicle destroyed');
    }
}

// Car class extending Vehicle
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this._doors = doors;
    }

    // Getter for doors
    get doors() {
        return this._doors;
    }

    // Setter for doors
    set doors(value) {
        this._doors = value;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Doors: ${this.doors}`);
    }
}

// Main code to test the classes
const myCar = new Car('Toyota', 'Corolla', 2020, 4);
myCar.displayDetails(); // Make: Toyota, Model: Corolla, Year: 2020, Doors: 4

myCar.make = 'Honda';
myCar.displayDetails(); // Make: Honda, Model: Corolla, Year: 2020, Doors: 4

myCar.destroy(); // Vehicle destroyed

/*
Explanation of OOP concepts:

1. Classes and Objects:
   - A class is a blueprint for creating objects. It defines properties and methods that the objects created from the class will have.
   - In the code, `Vehicle` and `Car` are classes. `myCar` is an object created from the `Car` class.

2. Inheritance:
   - Inheritance is a mechanism where one class can inherit properties and methods from another class.
   - In the code, `Car` class inherits from `Vehicle` class using the `extends` keyword. This means `Car` has all properties and methods of `Vehicle` plus its own.

3. Encapsulation:
   - Encapsulation is the concept of wrapping data (variables) and methods (functions) together as a single unit. It also involves restricting direct access to some of the object's components.
   - In the code, properties like `_make`, `_model`, `_year`, and `_doors` are encapsulated within the classes and accessed via getter and setter methods.

4. Polymorphism:
   - Polymorphism allows methods to do different things based on the object it is acting upon.
   - In the code, the `displayDetails` method is overridden in the `Car` class to add additional functionality (displaying the number of doors) while still calling the `displayDetails` method of the `Vehicle` class using `super.displayDetails()`.

5. Abstraction:
   - Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object.
   - In the code, the internal workings of how the properties are set and retrieved are abstracted away using getter and setter methods.
*/
