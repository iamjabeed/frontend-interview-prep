// console.log("Hello");

//* IIFE
// (function () {
//   console.log("Hello from IIFE!");
// })();

//*HOISTING */
// 1.Hoisting in JavaScript is a concept where variable and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed.

// 2.it supports only var where as let and const are in temporal dead zone
// console.log(x);
// var x = 5;
// console.log(x);

// foo();

// function foo() {
//   console.log("Hello, I'm foo!");
// }

// using let or const for variable declarations does not hoist the variable to the top of the scope like var does. This results in a ReferenceError because y is not defined until the line let y = 10; is reached during execution.

// console.log(y); // Output: ReferenceError: y is not defined
// let y = 10;

//*closure  */

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// function outerFunction() {
//   let outerVariable = "I am from the outer function";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   innerFunction();
// }

// outerFunction();

//*Callback

//1.Registration
//2.send welcome email
//3.Login
//4.Get user data
//5.Display user data

// function registation() {
//   setTimeout(() => {
//     console.log("1.Registration");
//   }, 3000);
// }
// function welcomeMail() {
//   setTimeout(() => {
//     console.log("2.send welcome email");
//   }, 2000);
// }
// function login() {
//   setTimeout(() => {
//     console.log("3.Login");
//   }, 100);
// }
// function getUserData() {
//   setTimeout(() => {
//     console.log("4.Get user data");
//   }, 200);
// }
// function displayUserData() {
//   setTimeout(() => {
//     console.log("5.Display user data ");
//   }, 100);
// }

// registation();
// // setTimeout(registation, 3000);
// welcomeMail();
// // setTimeout(welcomeMail, 300);
// login();
// getUserData();
// displayUserData();
// console.log("and remaing tasks!");

//Callback Implementation
// function registation(cb) {
//   setTimeout(() => {
//     console.log("1.Registration");
//     cb();
//   }, 3000);
// }
// function welcomeMail(cb) {
//   setTimeout(() => {
//     console.log("2.send welcome email");
//     cb();
//   }, 2000);
// }
// function login(cb) {
//   setTimeout(() => {
//     console.log("3.Login");
//     cb();
//   }, 100);
// }
// function getUserData(cb) {
//   setTimeout(() => {
//     console.log("4.Get user data");
//     cb();
//   }, 200);
// }
// function displayUserData() {
//   setTimeout(() => {
//     console.log("5.Display user data ");
//   }, 100);
// }

// Call back Hell
// registation(() => {
//   welcomeMail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("and remaing tasks!");

//* Promises

// let apiPromise = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => {
//       if (res.ok) {
//         resolve(res.json());
//       } else {
//         console.log(res?.message, "error while fetching");
//       }
//     })
//     .catch((err) => {
//       console.log(err?.message || message);
//     });
// });

// apiPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err?.message || err);
//   });

//* setTimeout
// setTimeout is a function in JavaScript used to execute a specified function or code snippet after a specified delay (in milliseconds).

// setTimeout(() => {
//   console.log("hello from setTimeout");
// }, 3000);

//* setInterval
// setInterval is similar to setTimeout, but it repeatedly executes a specified function or code snippet at specified intervals (in milliseconds).

// setInterval(() => {
//   console.log("hello from setIntervel");
// }, 1000);

//* Clearing Timers:

// function clearTimer() {
//   const timer = setTimeout(() => {
//     console.log("Hello setTimeout");
//   }, 5000);

//   return () => clearTimeout(timer);
// }
// clearTimer();

// let intervalId = setInterval(() => {
//   console.log("Message every second");
// }, 1000);

// clearInterval(intervalId);

//? Tricky questions
// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//? O/p: 6,6,6,6,6 (due to closure var is gloabal scope and refer to the same variable)

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//? o/p: 1,2,3,4,5 (let is a block scope so for every iteration let i is a new variable it self)

//? Without using let

// function outer() {
//   for (var i = 1; i <= 5; i++) {
//     function closure(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     closure(i);
//   }
// }
// outer();
//? o/p: 1,2,3,4,5 (closure() form closure with outer function and creates a new variable i for every iteration)

//*OOP */
// class User {
//   constructor(name, mail, password) {
//     this.name = name;
//     this.mail = mail;
//     this.password = password;
//   }

//   encryptPass() {
//     return this.password + "cxqh3nr^&(";
//   }
// }

// const p1 = new User("Alex", "alex@gmail.com", "alex");
// console.log(p1);
// console.log(p1.encryptPass());

//Module exports

// commonJS
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };

// Named -ES6
export function add(a, b) {
  return a + b;
}

// default -ES6
export default function add(a, b) {
  return a + b;
}
