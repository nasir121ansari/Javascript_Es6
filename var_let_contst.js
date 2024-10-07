// ES5
// ---------------------------------------------- var variable --------------------------------------
/*
1. Hoisting:
In ES5, variable declarations using var are hoisted to the top of their containing scope. This means the declaration var title; is moved to the top, but not the assignment.
*/

console.log(title); // undefined
var title = 'ES5 test';
console.log(title); // 'ES5 test'


/*
2. var can be re-declared and reassigned
*/
var myName = 'Vicky';
console.log(myName);
myName = 'Nasir';  // re-assigned
console.log(myName);
var myName = 'Redan';  // re-declared
console.log(myName);


/*
3. Function Scope: Variables declared with var inside a function have function scope. A variable declared within a function will not affect a variable with the same name in the global scope.
*/
var firstName = 'Rahul';
function getName() {
    var firstName = 'Deepak';  // private for this function, cannot be accessed outside of the function
    console.log(firstName);
}
getName();  // Deepak
console.log(firstName); // Rahul

/*
Block Scope: Variables declared with var do not have block scope. A var declared within a block (e.g., an if statement) will still be in the function or global scope.
*/
var lastName = 'Varun';
if (true) {
    var lastName = 'Aman';
    console.log(lastName);  // Aman
}
console.log(lastName);  // Aman


var i = 100;
for (var i = 0; i <= 10; i++) {
    console.log('inside', i);
}
console.log('outside', i);   // 11



// ES6
// ---------------------------------------------- let and const variables --------------------------------------

/*
1. Hoisting and Temporal Dead Zone (TDZ):
In ES6, variables declared with let and const are also hoisted, but they are not initialized until their declaration is encountered in the code. This period between entering the block scope and encountering the declaration is known as the Temporal Dead Zone (TDZ).
Therefore, accessing the variable before its declaration will result in a ReferenceError.
*/

// console.log(heading);  // ReferenceError
let heading = 'ES6';
console.log(heading);


/*
2. let cannot be re-declared but can be reassigned
*/
let yourName = 'Vicky';
console.log(yourName);
yourName = 'Nasir';  // re-assigned
console.log(yourName);
// let yourName = 'Redan';  // cannot be re-declared
// console.log(yourName);


/*
3. Function Scope: Variables declared with let inside a function have function scope.
*/
let birthName = 'Rahul';
function getNames() {
    let birthName = 'Deepak';  // private for this function, cannot be accessed outside of the function
    console.log(birthName);
}
getNames();  // Deepak
console.log(birthName); // Rahul


/*
Block Scope: Variables declared with let have block scope.
*/
let dobName = 'Varun';
if (true) {
    let dobName = 'Aman';
    console.log(dobName);  // Aman
}
console.log(dobName);  // Varun


let a = 100;
for (let a = 0; a <= 10; a++) {
    console.log('inside', a);
}
console.log('outside', a);   // 100


// const cannot be re-declared or reassigned
const fixedValue = 10;
// fixedValue = 20;  // Error: Assignment to constant variable.
// const fixedValue = 30;  // Error: Identifier 'fixedValue' has already been declared
