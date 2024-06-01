// An arrow function expression is a compact alternative to traditional function expressions

// ES5
function add(x, y) {
  return x + y;
}

console.log("add", add(2, 3));

// ES6
// An arrow function expression is a compact alternative to traditional function expressions
// 1. If we have a single line to return, we can directly return without the return statement
const sum = (x, y) => x + y;
console.log("sum", sum(4, 5));

// 2. If we don't have arguments
const sum1 = () => 2 + 4;
console.log("sum1", sum1());

// 3. If we have a single argument
const sum3 = (x) => x + 4; // Parentheses can be omitted for single arguments
console.log("sum3", sum3(1));

const sum4 = (x) => x + 5;
console.log("sum4", sum4(2));

// 4. We can't return an object directly in an arrow function without wrapping it in parentheses
// Incorrect:
// const arrowObject = () => {
//   name: "nasir",
//   city: "Bihar"
// };
// We have to wrap it in parentheses
const arrowObject1 = () => ({
  name: "nasir",
  city: "Bihar",
});

console.log("arrowObject1", arrowObject1());

// 5. The `this` keyword
// ES5
function addToCart() {
  this.productName = "Mobile";
  this.getProduct = function () {
    console.log(this);
    setTimeout(function () {
      // Here, `this` points to the global object (window in browsers)
      console.log("inside setTimeout", this);
      console.log("here", this.productName);
    }, 1000);
  };
}

// let obj = new addToCart();
// obj.getProduct();

// ES6
function addToCart1() {
  this.productName = "Mobile";
  this.getProduct = function () {
    console.log(this);
    setTimeout(() => {
      // Here, `this` points to the parent object
      console.log("inside setTimeout", this);
      console.log("here", this.productName);
    }, 1000);
  };
}

// let obj1 = new addToCart1();
// obj1.getProduct();

const user = {
  name: "harsh",
  getUser: () => {
    return `User name is ${this.name}`; // User name is undefined, referencing the global object
  },
  getUser1: function () {
    return `User name is ${this.name}`;
  },
};

console.log(user.getUser()); // User name is undefined
console.log(user.getUser1()); // User name is harsh

// 6. Multiple arguments
function multipleArgs() {
  console.log(arguments);
}

multipleArgs(1, 2, 3, 4);

// Using rest parameters
const arrow = (...args) => {
  return args;
};

console.log("rest parameter", arrow(1, 2, 3));
