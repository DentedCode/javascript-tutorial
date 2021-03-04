////Syntax

// Single line Comment
/*
multiple line Comment
*/

//// Declaration
// var name = "Prem";
// ES6
// const fName = "prem";
// let age = "20";

//// Operators
/// Arithemetic Operators -> + - * / % **
// const result = 5 + 6;
// const result = 15 - 6;
// const result = 5 + 6;
// const result = 2 * 3;
// const result = 12 / 6;
// const result = 14 % 6;
// const result = 2 ** 3; //es6 2 * 2 * 2

// Increment and decrement
// let a = 5;
// a++; //increment by 1
// a--; //decrement by 1

/// Comparison Operators
// -> ==, ===, <, >
// let a = 4;
// let b = 5;

/// locigal Operators
// -> && , ||, !, tenary

//// Data Types
/// premitives
// -> String, number, boolen, undefined, null
// const str = " hellow there";
// const age = 25;
// const isIt = true; // false
// const init = undefined;
// const holder = null;

/// Refrence type
// -> Object, array and function

//Object
// const preson = {
//   name: "Prem",
//   age: 20,
//   details: function () {
//     return `My Name is ${this.name}  and i am ${this.age} yr old.`;
//   },
// };

//Array
// const furit = ["Apple", "banana", "Pear", "Grapes"];

//Funciton
// function addValue(a, b) {
//   return a + b;
// }

// es6 arrow function
// const addValue = (a, b = 0) => a + b;

// Date Obects
// const today = new Date();
// const year = today.getFullYear();

// Math Object

// const piVal = Math.PI;
// const val = Math.round(4.5);
// const val = Math.ceil(4.5);
// const val = Math.floor(4.9);
// const val = Math.random(); // btwn 0 and 1
// const val = Math.min(5, 2, 8, 41, 1);
// const val = Math.max(5, 2, 8, 41, 1);

////Conditional statements
// -> if else, else if, switch

// const speak = (living) => {
// if (living === "human") {
//   return "hellow";
// }
// if (living === "cat" && type === "animal") return "Its mammal";
// if (living === "cat" || type === "animal") return "Its mammal 2";
// if (type != "animal") return "Its Human";
// const value = living === "cat" ? "Its Cat" : "Its human";
// return value;
// if (living === "human") {
//   return "hellow";
// } else if (living === "cat") {
//   return "meow";
// } else if (living === "dog") {
//   return "woof";
// } else {
//   return "$&(&^(&";
// }
// switch (living) {
//   case "human":
//     return "hellow";
//   case "dog":
//     return "woof";
//   case "cat":
//     return "meow";
//   default:
//     return "%%*&*&*";
// }
// };

//// Loops
// -> for, for/in, for/of, while, do/while

// const loopMe = () => {
// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//     break;
//   }
//   console.log(i);
// }

/// for/in
// const person = {
//   name: "prem",
//   age: 20,
// };

// for (const key in person) {
//   console.log(person[key]);
// }

// const furit = ["Apple", "banana", "Pear", "Grapes"];
// for (const value of furit) {
//   console.log(value);
// }

//while loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//   do {
//     console.log(i);
//     i++;
//   } while (i < 10);
// };

// const erroLog = () => {
//   try {
//     return a + 5;
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("finally is executing");
//   }
// };
// console.log(erroLog());

////Objects
// const student = {
//   name: "Prem-Acharya",
//   age: 16,
//   "some-Array": ["apple", "mango", "banana"],
//   childObj: {},
// };

// for (const key in student) {
//   // console.log(student[key]);
// }

// console.log(student["some-Array"]);
// for/in for (x in person) → for object

// Number
// const a = "5.4645";
// console.log(parseFloat(a));
// -2^53-1 to 2^53-1 //safe number

// String
// Escape character \

// const name = "Hello there, my name is Prem Acharya";

// Length
// indexOf, lastIndexOf, search
// Slice, substring, substr
// Replace, concat, trim
// toUpperCase, toLowerCase
// charAt, [], split
// let value = money.slice(9, 11);

// console.log(name.split(","));

//// Array[]

const fruits = ["apple", "mango", "banana", "apple1", "mango1", "banana1"];
// Length, push , pop, shift, unshift, toString, join,[], splice, slice
// Sort, reverse
// forEach, map
// Filter, every,  reduce
// indexOf, fill

// console.log(fruits.unshift("kiwi"));
// const num = [1, 5, 3, 12, 99, 1000];
// console.log(fruits.reverse());

// ->
// const newArry = new Array(10).fill("a");

// fruits.forEach((element) => console.log(element));
// fruits.map((item, i) => console.log(i, item));
// const filteredArray = fruits.filter((item) => item.includes("ma"));
// const isEvery = fruits.every((item) => item.includes("a"));

// reduce
// const numbers = [4, 5, 3, 20, 9];
// const newReduced = numbers.reduce((total, currentNumber) => {
//   return total + currentNumber;
// }, 9);
// console.log(newReduced);

// console.log(fruits.indexOf("mango"));
