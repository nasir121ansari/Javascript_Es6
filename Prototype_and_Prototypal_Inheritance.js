// Think of a prototype as a blueprint or a template for objects. When you create a new object, it can inherit properties and methods from its prototype.


let object = {
    name: 'nasir',
    city: "Jamui"
}


let object2 = {
    name: 'Vicky'
}

object2.__proto__ = object


// Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects.
console.log(object2.city)