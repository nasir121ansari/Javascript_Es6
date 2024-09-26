
// --------------------------------------------------------------------First example ---------------------------------------------
let deatils = {
    firstName: 'Nasir',
    lastName: 'Ansari',
    printFullName: function () {
        console.log(`${this.firstName}  ${this.lastName}`)
    }
}


let deatils2 = {
    firstName: 'rehan',
    lastName: 'Ansari',
}

// function borrowing 
deatils.printFullName.call(deatils2)





// --------------------------------------------------------------------second example ---------------------------------------------
let info2 = {
    firstName: 'rehan',
    lastName: 'Ansari',
}
let printFullName = function (hometown, number) {
    console.log(`${this.firstName}  ${this.lastName} form ${hometown}  and mobile number is ${number}`)
}
printFullName.call(info2, "Patna", "9975623891")
printFullName.apply(info2, ["Delhi", "9975623891"])
let info3 = printFullName.bind(info2, "Banglore", "9975623891")
info3()

// the only diffrence between call and apply is passing the argumnets in call we are passing arguments comma separeate and apply we can pass as a arrya 
// bind method :-  the only difference bewteen apply and bind is apply Invokes the function immediately and bind Returns a new function which can be called later.

// polyfill for call
Function.prototype.myCall = function(context = {},...args){
    if(typeof this !== "function"){
        throw new Error(this + "is not function")
    }
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}
printFullName.myCall(info2, "Patna", "9975623891")
// polyfill for appply
Function.prototype.myApply = function(context = {}, args = []) {
    if (typeof this !== "function") {
        throw new Error(this + " is not a function");
    }
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
};
printFullName.apply(info2, ["Delhi", "9975623891"])


Function.prototype.myBind = function(context = {}, ...boundArgs) {
    if (typeof this !== "function") {
        throw new Error(this + " is not a function");
    }
    const originalFunction = this;
    return function(...args) {
        const finalArgs = [...boundArgs, ...args];
        return originalFunction.apply(context, finalArgs);
    };
};
let info33 = printFullName.myBind(info2, "Banglore", "9975623891")
info33()





