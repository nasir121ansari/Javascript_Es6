
// Debouncing
// Debouncing ensures that a function is only called once, after a specified delay, regardless of how many times the event is triggered.
let counter = 0;
const getData = () => {
    console.log('data fetching', counter++)
}
// it will call get data only if the diffrence between two key press event is equal to and greater than 300
const doBounce = function (fn, d) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, d)

    }
}
const betterFunction = doBounce(getData, 300)
// throttling
// Throttling ensures that a function is only called at most once in a specified time period, regardless of how many times the event is triggered.
const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};



const betterFunction1 = throttle(getData, 300)