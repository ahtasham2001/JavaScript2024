// What is an Array?
// An array in JavaScript is a special type of object that stores a collection of elements. These elements can be of any data type, including numbers, strings, objects, or even other arrays. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size dynamically as elements are added or removed.

// Creating Arrays
// In JavaScript, we can create an array using

// Array Literal Notation '[]'
// Array constructor
// Example:

// Array Literal Notation
// In JavaScript, we can create arrays using array literal notation, which involves enclosing a comma-separated list of elements within square brackets '[]'.

// Creating an array of numbers using array literal notation
// const numbers = [1,2,3,4,5,6];
// console.log(numbers);
// console.log(typeof(numbers));
// // Creating an array of strings using array literal notation
// const fruits = ["apple", "banana", "orange"]
// console.log(fruits);
// console.log(typeof(fruits));
// // Creating an array of mixed data types using array literal notation
// const mixed = [1, 'apple',true,{ name: "Ahtasham"}];
// console.log(mixed);
// console.log(typeof(mixed));


// Array Constructor
// In JavaScript, we can also create arrays using the Array constructor. The Array constructor can be called with or without the new keyword.
// Creating an array of numbers using Array constructor

// const numbers = new Array(1,2,3,4,5,6);
// console.log(numbers);
// console.log(typeof(numbers));

// // Creating an array of strings using Array constructor

// const fruits = new Array("apple","banana","orange");
// console.log(fruits);
// console.log(typeof(fruits));

// // Creating an empty array using Array constructor
// const emptyArray = new Array();
// console.log(emptyArray);

// Accessing Array Elements
// In JavaScript, we can access array elements using square brackets notation '[]'. Array indexing starts from 0, where the first element of the array has an index of 0, the second element has an index of 1, and so on.



// const numbers = [1,2,3,4,5];
// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[numbers.length-1]);


// const index =1;
// console.log(numbers[1]);

// In JavaScript, we can insert elements into an array using various methods. In array we can insert an item/element at various places of an array :

// Insertion at End
// Insertion at Start
// Insertion at Random Index
// Let's understand each method one by one

// Insertion at End
// We can insert an item/element at the end of an array using the push method.

// The push method adds one or more elements to the end of an array and returns the new length of the array.

// const fruits = ["apple", "banana", "orange"];
// fruits.push("Mango");
// fruits.push("PineApple");
// console.log(fruits);



// Insertion at Start
// We can insert an item/element at the starting of an array using the unshift method.

// The unshift method Adds one or more elements to the beginning of an array and returns the new length of the array.


// const fruits = ["orange","banana","graps"]
// fruits.unshift("apple");
// fruits.unshift("kiwi");
// console.log(fruits);

// Insertion at Random Index
// To add an element/item at a random index inside an array we use the splice method.

// The splice method adds or removes elements from an array at a specified index.

// In the above syntax only thing we need to keep in mind is that

// If we only want to add new items then keep the 'deleteCount = 0',
// startIndex : The index at which to start changing the array.
// If startIndex is negative, it will begin that many elements from the end of the array. - If startIndex is greater than the length of the array, it will start at the length of the array.
// If we don't wan't to add any item we can just ignore the item parameters.



// const fruits = ["apple","orange",];
// fruits.splice(1,0,"banana");
// fruits.splice(3,0,"pineapple");
// fruits.splice(4,0,"Tomatoes");
// console.log(fruits);


// Filter Method on Arrays
// In JavaScript, the filter() method is used to create a new array with all elements that satisfy the specific condition in the provided callback function. It doesn't change the original array.

// filter() method returns a new array with elements that satisfy the condition specified in the callback function.
// Filter Method on Array of Numbers

// const numbers = [-2,0,4,-49,53];
// const positiveNumbers = numbers.filter(function(number) {
//     return number >0;
// })
// console.log(positiveNumbers);


// Filter Method on Array of Objects

// const products = [
//     {
//         id: 1,
//         name: "Product A",
//         price: 10 
//     },
//     {
//         id: 2,
//         name: "Product B",
//         price: 20 
//     },
//     {
//         id: 3,
//         name: "Product C",
//         price: 30
//     },
// ];

// const expensiveProducts = products.filter((product) => product.price > 15);

// console.log(expensiveProducts);



// Reduce Method on Arrays
// In JavaScript, the reduce() method is used to reduce an array to a single value. It executes a provided callback function once for each element of the array, resulting in a single output value.
// callback: A function that executes on each element of the array, taking following arguments:
// accumulator: The accumulated value resulting from the reduction.
// currentValue: The current element being processed in the array.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array will be used as the initial value, and iteration starts from the second element.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
















