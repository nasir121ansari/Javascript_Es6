let originalValue = {
  name: "john",
  age: 20,
  getName: function () {
    this.name = "John";
  },
  address: {
    city: "jamui",
  },
};

//1. its creating a shallow copy using assignment operator
let copeidValue = originalValue;
copeidValue.name = "peter";
console.log("after originalValue", originalValue);
console.log("after copeidValue", copeidValue);

//2.creating deep copy  using json.stringify()
let deepCopyValue = JSON.parse(JSON.stringify(originalValue));
deepCopyValue.name = "Rahul";
console.log("deep originalValue", originalValue);
//but the issue is json.stringify() not able to copy function
console.log("deep deepCopyValue", deepCopyValue);

//3.creating deep copy using object.assign()
//object assign able to copy function
let deepCopyValue1 = Object.assign({}, originalValue);
// but if we have nested objects and trying to change the value of nested object it will change the value if original object
// deepCopyValue1.address.city = "patna";

// console.log("deep originalValue", originalValue);
// console.log("deep deepCopyValue1", deepCopyValue1);

//4. creating deep copy using spread operator
let deepCopyValue2 = {
  ...originalValue,
  address: { ...originalValue.address, city: "patna" },
};

console.log("originalValue", originalValue);
console.log("spread operator deepCopyValue2", deepCopyValue2);
