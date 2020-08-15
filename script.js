// syntax
// single line comment
/*
multi line comment
*/

// var bookName = "Javascript course";
// // ES 6
// let codeEditor = "Vs Code";
// const browser = "Chrome";

// Operators
// Arithemetic Operators
// const result = 5 + 6;
// const result = 15 - 6;
// const result = 2 * 6;
// const result = 12 / 6;
// const result = 13 % 6;
// const result = 2 ** 3; // 2*2*2

//increment and decrement
// let a = 5;
// a++;
// a--;

// Comparisons
// const a = 4;
// const b = 5;

// Data types
// a. Premitives
// -> String, number, boolen, undefined, null
const str = "Hellow there";
const num = 10;
const isIt = true; //false
const defin = undefined;
const empt = null;

// b. refrence types
// -> Object, array and function
// const person = {
//   name: "Sam",
//   age: "25",
//   details: function () {
//     return "my name is " + this.name + ". I am " + this.age + "yr old.";
//   },
// };

// const fruit = ["Apple", "banana"];

// function addValues(a, b) {
//   return a + b;
// }
// ES6 arrow function
// const addValues = (a, b = 2) => a + b;

// const today = new Date();
// const day = today.getUTCFullYear
// const day = today.getFullYear();

// maths Object

// const val = Math.PI;
// const a = 4.9;
// Math.round(a)
// Math.ceil(a)
// Math.floor(a)
// Math.random()
// const val = Math.min(5, 2, 20, 9, 1);
// const val = Math.max(5, 2, 20, 9, 1);

// Conditional statement
// -> if else, else if, switch

// const speak = (living) => {
// if (living == "human") {
//   return "Hellow there";
// } else if (living == "cat") {
//   return "meow";
// } else if (living == "dog") {
//   return "woof";
// } else {
//   return "%*%&$*%^&)";
// }
// Use switch for similary condition as abov
// switch (living) {
//   case "human":
//     return "Hellow there";
//   case "cat":
//     return "meow";
//   case "dog":
//     return "woof";
//   default:
//     return "%*%&$*%^&)";
// }
// };

// Loops
// -> for, for/in, for/of, whil, do/while

// for loop
// const loopMe = () => {
//   for (let i = 0; i < 10; i++) {
//     if (i == 7) {
//       continue;
//       // break
//     }
//     console.log(i);
//   }
// };

// for/in for the Object
// const person = {
//   name: "Sarah",
//   age: 30,
// };

// const loopMe = () => {
//   for (const key in person) {
//     console.log(person[key]);
//   }
// };

// const fruit = ["Apple", "banana", "pear", "grapes"];

// const loopMe = () => {
//   for (const value of fruit) {
//     console.log(value);
//   }
// };

//while loop
// let i = 5;
// const loopMe = () => {
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i > 10);
// };

// Error Handling

const logError = () => {
  try {
    console.log(5);
  } catch (error) {
    console.log(error.message);
    console.log("Please provide the correct value");
  } finally {
    console.log("finally is reached");
  }
};

console.log(logError());
