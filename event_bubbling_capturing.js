// Event Capturing (Trickling):

// The event starts from the window object and travels downwards through the DOM tree to the target element.


// Event Bubbling:
// After reaching the target element, the event travels back up the through DOM tree to the window object.


// stopPropagation
// The stopPropagation method is used to prevent further propagation of the current event in the capturing and bubbling phases

var div = document.querySelector("div")
var button = document.querySelector("button")

div.addEventListener("click", () => {
    console.log('div')
})

button.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log('button')
})