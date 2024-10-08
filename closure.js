// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// exmple-1
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }

// x();

// example-2
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
//x()()  // we can call inner function like thats
// let z = x();
// z();

// example-3
// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// let z = x();
// z();

// example-4
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
let z = x();
// z(); // 100

// example-5   setTime out

function xx() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

// xx();
// When using var inside a loop with setTimeout, all iterations of the loop share the same variable. By the time the setTimeout function runs, the loop has finished, and the variable i holds its final value, which is 6 in this case. That's why 6 is printed six times

// output
/*
6
6
6
6
6
6
*/

//first approach
// To fix this, we can use let instead of var. The let keyword creates a new scope for each iteration of the loop, so each setTimeout gets its own copy of i with the correct value at that moment in the loop.

function xxx() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

// xxx();

//  Using an IIFE (Immediately Invoked Function Expression)

function xxxx() {
  for (var i = 0; i <= 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

// xxxx();

// second approach closure

function xxxy() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
    close(i);
  }
}

// xxxy();




// Functions currying 

// Function currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. 

function first(x) {
  return function second(y) {
    console.log(x + y)
  }
}

first(1)(2)



// infinite currying

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b)
    }
    return a
  }
}

// console.log(sum(1)(2)())

// using arrow function
let summ = (a) => {
  return (b) => {
    return b ? summ(a + b) : a
  }
}

// console.log(summ(1)(2)(5)())

// in one line

let summm = a => b => b ? summm(a + b) : a;
// console.log(summm(1)(2)(5)(7)())
