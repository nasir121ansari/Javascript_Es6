// JavaScript has several major data types that are divided into two categories:
// primitive data types and reference data types.

/*
Primitive Data Types:
1. Primitive data types are immutable and are accessed by value.
*/

let age = 30; // Number
let name = "Alice"; // String
let isAvailable = true; // Boolean
let result = null; // Null
let data; // Undefined
let uniqueID = Symbol("id"); // Symbol
let bigNumber = BigInt("1234567890123456789012345678901234567890"); // BigInt

/*
Reference Data Types:
Reference data types are mutable and accessed by reference.
*/

// Object: Represents a collection of properties.
let c = {
  name: "Alice",
  age: 25,
};

// When you assign an object to another variable, both variables reference the same object in memory.
// This means that if you modify the object using one variable, the changes will be reflected when you access the object through the other variable. This is due to the fact that objects are reference types in JavaScript.

let d = c; // Mutable, referring to the same memory location
let z = Object.assign({}, c); // Immutable, referencing a different memory location
let k = { ...c }; // Immutable, referencing a different memory location

d.city = "Kolkata";

console.log("Original object (c):", c); // { name: "Alice", age: 25, city: "Kolkata" }
console.log("Modified object (d):", d); // { name: "Alice", age: 25, city: "Kolkata" }
console.log("Copied object (z):", z); // { name: "Alice", age: 25 }
console.log("Copied object (k):", k); // { name: "Alice", age: 25 }

// Array: Represents a list of values.
let a = ["red", "green", "blue"];
let b = a; // Mutable, referring to the same memory location
let e = a.concat(); // Immutable, referencing a different memory location
let f = [...a]; // Immutable, referencing a different memory location

b.pop(); // Modifying the original array through b

console.log("Original array (a):", a); // ["red", "green"]
console.log("Modified array (b):", b); // ["red", "green"]
console.log("Copied array (e):", e); // ["red", "green", "blue"]
console.log("Copied array (f):", f); // ["red", "green", "blue"]
