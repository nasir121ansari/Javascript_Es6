// function statement

function a() {
  console.log("hello");
}
/*
Function Statement:
1. Function declarations are hoisted to the top of their scope. This means that you can call the function before its actual declaration in the code.

2. A function declaration must have a name.
*/

// -------------------------------------------------------------
// function expression is also known is function declration
// (a) // give type error
let a = function b() {
  console.log("b");
  console.log(b); // it will return whole function
};

// b(); we cant acces this it will give refrence error

/*
Function Statement:
1. Function expressions, on the other hand, are not hoisted in the same way. The variable declaration for a function expression is hoisted, but its assignment (the actual function definition) is not.

2. A function expression can be anonymous (without a name) or named.

3. if function is having name fucntion b() then its also called Named function expression
*/

// --------------------------------------- Parameter and Arguments ----

// a,b is parameter
function sum(a, b) {
  return a + b;
}

sum(1, 2); // here 1,2 is Arguments

//--------------------------- first class function ---------------

function createGreeter(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}

const greetJohn = createGreeter("John");
greetJohn(); // Output: Hello, John!

/*

Functions can be stored in variables: You can assign a function to a variable.
Functions can be passed as arguments: You can pass functions to other functions as arguments.
Functions can be returned from other functions: You can return a function from another function.

*/
