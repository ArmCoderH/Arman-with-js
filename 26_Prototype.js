// Checking if Array and String are objects in JavaScript
// Array and String are objects in JavaScript, with additional prototype methods attached to them.

const namesArray = ['arman', 'sahi']; // Example of an array
const myString = "arman"; // Example of a string

// An example of an object with properties and a method
const userDetails = {
    name: "hingora",
    email: "armanhingora@example.com",

    displayUserName: function () { // Method to display the user's name
        console.log(`My name is ${this.name}`);
    }
};

// Adding a custom method to the Object prototype
Object.prototype.printAsObject = function () {
    console.log('Yes, I am an object!');
};

// Demonstrating that arrays and strings are objects
// namesArray.printAsObject(); // Array as an object
// myString.printAsObject();   // String as an object

//************** INHERITANCE *************

// Defining a base user object
const user = {
    name: "hingora",
    email: "armanhingora@example.com"
};

// A teacher object with specific properties
const teacher = {
    canMakeVideo: true
};

// A TeachingSupport object with a specific property
const teachingSupport = {
    isAvailable: false
};

// Teaching Assistant object inheriting properties from TeachingSupport
const teachingAssistant = {
    assignmentTopic: "JavaScript",
    __proto__: teachingSupport // TeachingSupport data is accessible in teachingAssistant
};

// Checking inheritance
// console.log(teachingAssistant.isAvailable);

// Another method to set up inheritance
Object.setPrototypeOf(user, teacher); // The user object can now access teacher's properties

console.log(teacher.name); // Undefined, as the teacher object does not have a 'name' property

//************** STRING PROTOTYPE EXTENSION *************

// Example string to demonstrate prototype extension
let extraSpacesString = "Chai      ";

// Adding a custom method to the String prototype to calculate the trimmed length
String.prototype.calculateTrimmedLength = function () {
    console.log(`True length is: ${this.trim().length}`);
};

// Using the custom String method
extraSpacesString.calculateTrimmedLength();
