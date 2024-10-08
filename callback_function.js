//what is a callback function in js

function x(y) {
  y();
}

function y() {
  console.log("y");
}

x(y);

/* 
Callbacks
A callback is a function that is passed into another function as an argument and is executed inside that function.

In your example, the function y is a callback because it is passed as an argument to the function x and then called within x.

/*

/*

Higher-Order Functions
A higher-order function is a function that either:

1.Takes one or more functions as arguments, or
2.Returns a function as its result.

In your example, the function x is a higher-order function because it takes another function y as an argument.

*/


/*

1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 
*/
