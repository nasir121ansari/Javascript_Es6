const user = {
  firstName: "John",
  lastName: "Khan",
  address: {
    city: "New York",
    country: "USA",
  },
};

// const { firstName } = user;
// console.log(firstName); // John

// const { firstName, lastName } = user;
// console.log(firstName);
// console.log(lastName);

// we can also pass alias name
// const { firstName: fn, lastName: ln } = user;
// console.log(fn);
// console.log(ln);

// if some properyt is not available in object creation we can aslo pass here with default value
// const {
//   firstName,
//   lastName,
//   age = 10,
//   address: { city },
// } = user;

// console.log(age);
// console.log(city);

// we can also use rest operators

const { firstName, ...useinfo } = user;
console.log(firstName);
console.log(useinfo);

// array

const scores = [10, 20, 30, 40, 50, 60];

const [x] = scores;
console.log(x);
