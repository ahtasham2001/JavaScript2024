// bjects: JavaScript objects are fundamental data structures that enable the organization and storage of data in the form of key-value pairs. Objects are unordered collection of key value pairs. These key-value pairs, known as properties.

// Object Creation in JavaScript
// There can be typically four ways to create an Object in JavaScript.

// Using object literal.
// Using new keyword
// Using Object.create() method
// Using Factory functions
// Using Constructor functions
// Take a deep breath. Let's start with the first method.

// Using object literal
// This is the most common, easiest and straightforward way to create an object. We can define the object and its properties using the object literals.

// Object literal is a list of key-value pairs enclosed in curly braces '{}'


// let person = {};
// console.log(typeof(person));

// Let's add some properties such as firstName, lastName, age, hobbies and a message function to the person object.


let person = {
  firstName : "Ahtasham",
  lastName : "Naeem",
  age : 22,
  hobbies : ["reading","writing", "Learn new Skill"],
  message : function(){
    console.log("ThankYou" )
  }
};
console.log(person);
console.log(person.firstName);
console.log(person.message);


