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

// // 3. Function composition - still problematic, too many parentheses
// let input = "  Javascript  ";
// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}<div>`;
// const toLowerCase = (str) => str.toLowerCase();

// const output = wrapInDiv(toLowerCase(trim(input)));

// // 3. Fix issue with lodash -> pipe passes result of first function to following function in order
// // But won't work if has different number of arguments (e.g using 'wrap')
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
// // const transform = pipe(trim, toLowerCase, wrap("div")); // pass functions as arguments (compose is also a higher order function)

// // 3. Need to fix this issue with 'Currying', function with a single parameter that returns a function
// const wrapInType = (type) => (str) => `<${type}>${str}<${type}>`;
// const newTransform = pipe(trim, toLowerCase, wrapInType("span")); // pass functions as arguments (compose is also a higher order function)

// console.log(newTransform(input));

// // 4. Immutability
// const person = {
//   name: "John",
//   address: {
//     country: "USA",
//     city: "San Francisco",
//   },
// };
// const updated = {
//   ...person,
//   name: "Bob",
//   address: {
//     ...person.address,
//     city: "New York",
//   },
// };

// const numbers = [1, 2, 3];
// const index = numbers.indexOf(2);
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
// console.log(numbers.filter((n) => n !== 2));
// console.log({ added });

// // 5. Immutable.js
// import { Map } from "immutable";

// // No immutable
// // let book = { title: "Harry Potter" };

// // function publish(book) {
// //   book.isPublished = true;
// // }
// // publish(book);
// // console.log(book) -> book object gets changed

// // Using immutable library
// let book = Map({ title: "Harry Potter" });

// // console.log(book.get("title"));
// // console.log(book.toJS());

// function publish(book) {
//   return book.set("isPublished", true);
// }

// const newBOok = publish(book);
// console.log(newBOok.toJS());
// console.log(book.toJS()); // not changed

// // Using the Immer library
// import { produce } from "immer";

// let book = { title: "Harry Potter" };

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }
// let updated = publish(book);
// console.log({ book, updated }); //original book object not modified

// // Challenge 1
// // import { pipe } from "lodash/fp";

// const extractTag = (obj) => obj.tag;
// const convertToLowercase = (str) => str.toLowerCase();
// const addParenthesis = (str) => `(${str})`;

// const transform = pipe(extractTag, convertToLowercase, addParenthesis);

// console.log(transform({ tag: "JAVASCRIPT" }));

// Challenge 2
// const recipe = {
//   name: "Spaghetti Bolognese",
//   ingredients: ["egg", "salt"],
// };

// const newReceipe = {
//   ...recipe,
//   ingredients: [...recipe.ingredients, "cream"],
// };

// const replace = {
//   ...recipe,
//   ingredients: recipe.ingredients.map((ingredient) =>
//     ingredient === "egg" ? "egg white" : ingredient
//   ),
// };

// const deleted = {
//   ...recipe,
//   ingredients: recipe.ingredients.filter((ingredient) => ingredient !== "egg"),
// };

// console.log({ recipe, newReceipe, replace, deleted });
