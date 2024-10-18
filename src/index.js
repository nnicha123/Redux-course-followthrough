import { compose, pipe } from "lodash/fp";

// // 1. Functions as first-class citizens -> treat the same as a normal variable
// function sayHello(){
//     return "Hello World"
// };
// // let fn = sayHello;

// function greet(fnMessage){
//     console.log(fnMessage());
// }

// greet(sayHello);

// function sayHello(){
//     return function(){
//         return "Hello World";
//     }
// }

// let fn = sayHello();
// let message = fn();

// // 2. Higher order functions - take a function as an argument, or return it, or both

// let numbers = [1,2,3];

// // Map is an example of a higher order function
// numbers.map(number => number*2);

// // setTimeout is another example of a higher order function
// setTimeout(() => {
//     console.log("Hello")
// }, 1000);

// 3. Function composition - still problematic, too many parentheses
let input = "  Javascript  ";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str) => str.toLowerCase();

// const output = wrapInDiv(toLowerCase(trim(input)));

// 3. Fix issue with lodash -> pipe passes result of first function to following function in order
// But won't work if has different number of arguments (e.g using 'wrap')
const wrap = (type, str) => `<${type}>${str}</${type}>`;
// const transform = pipe(trim, toLowerCase, wrap("div")); // pass functions as arguments (compose is also a higher order function)

// 3. Need to fix this issue with 'Currying', function with a single parameter that returns a function
const wrapInType = (type) => (str) => `<${type}>${str}<${type}>`;
const newTransform = pipe(trim, toLowerCase, wrapInType("span")); // pass functions as arguments (compose is also a higher order function)

console.log(newTransform(input));
