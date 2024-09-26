const arr = [1, 2, 3, 4];

// map - A higher-order function that transforms each element of an array and returns a new array
const output = arr.map((x) => x * 2);
console.log(output); // Output: [2, 4, 6, 8]

// filter - A higher-order function that filters elements of an array based on a condition and returns a new array
const output1 = arr.filter((x) => x % 2 === 0);
console.log(output1); // Output: [2, 4]

// reduce - Executes a reducer function on each element of an array, resulting in a single output value
const output2 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(output2); // Output: 10

const users = [
    { firstName: 'Nasir', lastName: 'Ansari', age: 30 },
    { firstName: 'Donald', lastName: 'Trump', age: 75 },
    { firstName: 'Elon', lastName: 'Musk', age: 50 },
    { firstName: 'Deepak', lastName: 'Singh', age: 30 },
];

// Combining first and last names using map
const combinedNames = users.map((user) => user.firstName + ' ' + user.lastName);
console.log(combinedNames); // Output: ['Nasir Ansari', 'Donald Trump', 'Elon Musk', 'Deepak Singh']

// Finding duplicate ages using reduce
const ageCount = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(ageCount); // Output: { '30': 2, '50': 1, '75': 1 }

// Combining map and filter to find users younger than 50 and get their first names
const youngUsers = users.filter((user) => user.age < 50).map((user) => user.firstName);
console.log(youngUsers); // Output: ['Nasir', 'Deepak']

// Achieving the same output using reduce
const youngUsersWithReduce = users.reduce((acc, curr) => {
    if (curr.age < 50) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(youngUsersWithReduce); // Output: ['Nasir', 'Deepak']




// poly fill of map 
// array.map(function(currentValue, index, arr))
Array.prototype.myMap = function(cb){
    console.log('this',this)
    let temp = [];
    for(let i=0;i< this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
  }
  
  let array11 = [1,2,3]
  console.log(array11.myMap((item) =>  item*2))

// polyfill of filter 
// array.filter(function(currentValue, index, arr))
Array.prototype.myFilter = function(cb){
    console.log('this',this)
    let temp = [];
    for(let i=0;i< this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp
  }
  
  let array111 = [1,2,3]
  console.log(array111.myFilter((item) =>  item % 2 == 0))


// polyfill for reducer
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
Array.prototype.myReduce = function(cb,initialValue) {
    let acc = initialValue;
    for(let i=0;i<this.length;i++){
         acc = acc ? cb(acc,this[i],i,this) : this[i]
    }
    return acc
}

console.log(array111.myReduce((acc,curr) =>   acc+curr))
