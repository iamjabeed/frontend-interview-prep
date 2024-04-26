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

const sum = () => {
  const a = 10;
  const b = 10;
  const innerFunc = () => {
    const sum = a + b;
    console.log(sum);
  };
  return innerFunc;
};

// const res = sum();
// res();
// or
// sum()();

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
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = { add, sub };

// Named -ES6
// export function add(a, b) {
//   return a + b;
// }

// default -ES6
// export default function add(a, b) {
//   return a + b;
// }

// Array methods
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach
// Purpose: Executes a provided function once for each array element (doesn't return any value).
// const result = arr.forEach((num, i) => {
//   console.log(num, i);
// });

// console.log(result); //undefined bcz forEach doesn't return any value

// map
// Purpose: Creates a new array by calling a provided function on every element in the array.
// const result = arr.map((num, i) => {
//   console.log(num, i);
//   return num * 2;
// });

// console.log(result); //[2,4,6,8,10,12,14,16]

// filter:
// Purpose: Creates a new array with elements that pass a certain condition.

// const filteredArr = arr.filter((num) => num > 5);
// console.log(filteredArr); //[6,7,8]

// const filter = arr.filter((num) => num % 2 == 0);
// console.log(filter); //[2,4,6,8]

// Reduce
// Purpose: Reduces the array to a single value based on a provided function.

// const total = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(total); //36

// Find:
// Purpose: Returns the first element in the array that satisfies a provided testing function.

// const foundValue = arr.find((num) => {
//   return num == 5;
// });

// console.log(foundValue); //5

// const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find((num) => num > 3);
// console.log(foundNumber); // Output: 4 (first number greater than 3)

// Some and Every:
// some: Checks if at least one element in the array satisfies a condition.

// const hasEvenNumber = arr.some((num) => num % 2 === 0);
// console.log(hasEvenNumber); // Output: true
// // every: Checks if all elements in the array satisfy a condition.
// const allPositive = arr.every((num) => num > 0);
// console.log(allPositive); // Output: true

// Includes:
// Purpose: Determines whether an array includes a certain element.

// const numbers = [1, 2, 3, 4, 5];
// const hasNumberThree = arr.includes(3);
// console.log(hasNumberThree); // Output: true

//DOM
// The Document Object Model (DOM) is a programming interface provided by web browsers that allows JavaScript to interact with HTML and XML documents. It represents the structure of a document as a tree of objects, where each object corresponds to a node in the document.

// console.log(document);

// 1. Accessing Elements:
// document.getElementById(id): Retrieves an element by its ID attribute.

//<div id="myDiv">Hello, World!</div>

// const element = document.getElementById("myDiv");
// console.log(element);

// document.getElementsByClassName(className): Retrieves elements by their class name.

// const paragraphs = document.getElementsByClassName('paragraph');

// document.getElementsByTagName(tagName): Retrieves elements by their tag name

// const listItems = document.getElementsByTagName("li");

// console.log(listItems);

// document.querySelector(selector): Retrieves the first element that matches the CSS selector.

{
  /* <div class="container">
  <p class="text">Paragraph</p>
</div> */
}

// const paragraph = document.querySelector('.container .text');

// document.querySelectorAll(selector): Retrieves all elements that match the CSS selector.
// const listItems = document.querySelectorAll("ul li");

// 2. Manipulating Elements:
// element.textContent: Sets or returns the text content of an element.
// const element = document.getElementById('myDiv');
// element.textContent = 'New Content';

// element.innerHTML: Sets or returns the HTML content of an element.
// const element = document.getElementById('myDiv');
// element.innerHTML = '<strong>New Content</strong>';

// element.setAttribute(name, value): Sets the value of an attribute on an element.
// const element = document.getElementById('myLink');
// element.setAttribute('href', 'https://example.com');

// element.style.property = value: Sets the inline style of an element.
// const element = document.getElementById('myDiv');
// element.style.color = 'red';

// element.classList.add(className): Adds a CSS class to an element.

// const element = document.getElementById('myDiv');
// element.classList.add('highlight');

// 3. Creating and Removing Elements:

// document.createElement(tagName): Creates a new element with the specified tag name.

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'New Paragraph';

// element.appendChild(newChild): Appends a new child element to an existing element.

// const container = document.getElementById('container');
// container.appendChild(newParagraph);

// element.removeChild(child): Removes a child element from an existing element.

// const container = document.getElementById('container');
// container.removeChild(newParagraph);

// element.remove(): Removes an element from the document.

// const element = document.getElementById('myDiv');
// element.remove();

// 4. Event Handling:
// element.addEventListener(event, handler): Attaches an event listener to an element.
// const button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

// element.removeEventListener(event, handler): Removes an event listener from an element.

// const button = document.getElementById('myButton');
// const handleClick = () => {
//   console.log('Button clicked!');
// };
// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);

// localStorage

// Local Storage is a web storage API provided by modern web browsers that allows web applications to store key-value pairs locally on a user's device. This data persists even after the browser is closed and can be accessed and modified by JavaScript code running in the browser. Here are the key methods and concepts related to Local Storage with examples:

// 1.Setting and Retrieving Data:
// localStorage.setItem(key, value): Sets a key-value pair in local storage.

// localStorage.setItem("username", "sara");

// localStorage.getItem(key): Retrieves the value associated with a key from local storage.
// console.log(localStorage.getItem("username")); //sara

// 2. Removing Data:
// localStorage.removeItem(key): Removes the key-value pair associated with a key from local storage.

// localStorage.removeItem("username");

// 3. Using JSON for Complex Data:
// Since Local Storage can only store strings, you can use JSON.stringify and JSON.parse to work with complex data types like objects and arrays:

// const userData = { username: "Jhon Doe", email: "jhon@doe.com" };

// localStorage.setItem("userData", JSON.stringify(userData));

// const storedData = JSON.parse(localStorage.getItem("userData"));
// console.log(storedData);

// JSON.stringify: to convet objects into strings
// JSON.parse: to parse string into objects
