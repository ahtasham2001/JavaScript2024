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


// let person = {
//   firstName : "Ahtasham",
//   lastName : "Naeem",
//   age : 22,
//   hobbies : ["reading","writing", "Learn new Skill"],
//   message : function(){
//     console.log("ThankYou" )
//   }
// };
// console.log(person);
// console.log(person.firstName);
// console.log(person.message);

// Using 'new' keyword
// We can use the new keyword along with the Object constructor to create an empty object and then add properties and methods to it.

// Let's create an empty person object using new keyword.

// let person = new Object();
// console.log(person);


// Let's add some properties such as firstName, lastName, age to the empty object created using new keyword.

// let person = new Object();
// person.firstName = "Ahtasham";
// person.lastName = "Naeem";
// person.age = 22;
// person.hobbies = ["reading", "writing", "hardworking"];
// console.log(person);
// console.log(typeof(person));

// Using Object.create() method
// In JavaScript, Object.create() is another method to create objects. However, it involves an additional step compared to some other object creation methods. First, a prototype object is created beforehand. Then, new objects are created using that prototype. Afterward, properties can be added or modified on the newly created object.

// Let's dive into an example of using Object.create() to create objects in JavaScript.



// let personPrototype = {
//     name : "Ahtasham"
// };

// let person = Object.create(personPrototype);
// console.log(person);


// An important thing to note is, while we are using Object.create(), this method creates a new empty object. In the above example person is a new empty object.

// In the above example, person is created with personPrototype as its prototype, but no additional properties are added to it, resulting in an empty object.

// Now, we can dynamically add properties to the person object.

// Example : Let's add firstName, lastName, age and hobbies dynamically to the newly created person object.
// let personPrototype = {
//     name : "Ahtasham"
// };

// let person = Object.create(personPrototype);
// console.log(person);

// person.firstName = "Ahtasham";
// person.lastName = "Naeem";
// person.age = 22;
// person.hobbies = ["HardWork","Learn New Skill", "Reading"]

// console.log(person);




