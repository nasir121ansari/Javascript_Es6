/*

A generator function in JavaScript is a special type of function that can be paused and resumed. 
When called, it does not execute the function body immediately; instead, it returns an iterator object.
You can control the flow of execution using the yield keyword.

*/

function* myGenerator() {
    yield 'First value';
    yield 'Second value';
    yield 'Third value';
}

const iterator = myGenerator();
console.log(iterator.next()); 
console.log(iterator.next().value); 
console.log(iterator.next()); 
console.log(iterator.next());

function* numberGenerator() {
    let index = 0;
    while (index < 3) {
        yield index++; 
    }
}

const iterator1 = numberGenerator(); 

console.log(iterator1.next()); // { value: 0, done: false }
console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: undefined, done: true }
