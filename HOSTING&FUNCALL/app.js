// function Hoisting

// sayHello();
// function sayHello(){
//     console.log("Ahtasham");
// }


// sayHello();

// let sayHello = function(){
//     console.log("Ahtasham");
// }


// var sayHello = function(){
//     console.log("Ahtasham");
// }

// let sayHello = function(){
//     console.log("Ahtasham");
// }

// variable  Hoisting

// console.log(fullName);
// // var fullName = "Ahtasham Naeem";
// // let fullName = "Ahtasham Naeem";
// const fullName = "Ahtasham Naeem";


// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);



const arr = {
    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },

    function(a,b){
        return a*b;
    }
}

let first = arr[0];
let ans =first(10,4);
console.log(ans);
