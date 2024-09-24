// Memoization in JavaScript is an optimization technique used to improve the performance of functions by caching their results. When a function is memoized, it stores the results of expensive function calls and returns the cached result when the same inputs occur again, thereby reducing the need for repeated calculations.

// A Map in JavaScript is a collection of key-value pairs where both keys and values can be of any data type.
// Create a new Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'Alice');

console.log(myMap.get('name'));  // Output: 25



function memoize(fn) {
    
    const cache = new Map();

    // Return a new function that will be the memoized version of the original function
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

// Example usage:
// Basic function to calculate the square of a number
function square(n) {
    return n * n;
}

// Create a memoized version of the square function
const memoizedSquare = memoize(square);

// Using the memoized function
console.log(memoizedSquare(4)); // Computes and returns 16
console.log(memoizedSquare(4)); // Returns cached result 16, very fast
console.log(memoizedSquare(5)); // Computes and returns 25
console.log(memoizedSquare(5)); // Returns cached result 25, very fast

