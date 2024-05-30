//------------------------------------------- Template literals ---------------------------------------------------------

let productName = 'Laptop';
let quantity = 2;

// ES5
// Here, there is no space between quantity and Laptop, and also we cannot break the line as it will throw an error.
let description = "I have ordered " + quantity + productName;
console.log(description);

// For adding space between quantity and productName, we have to add it in double quotes and adding quotes inside using backslashes
let description1 = "I have ordered " + quantity + " " + productName + " from \"amazon\" last week";
console.log(description1);


// ES6
// Using template literals, we can easily add double or single quotes and also call functions inside it.

function estimatedDelivery() {
    return "05-30-2024";
}

let description3 = `I have ordered ${quantity} ${productName} from "amazon" last week and the estimated delivery for this product is ${estimatedDelivery()}`;
console.log(description3);

// Here, we can break the line
let description4 = `I have
ordered ${quantity} ${productName}`;
console.log(description4);
