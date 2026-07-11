// var as variable - old method
var myAge = 20;
console.log(myAge);


// let as variable - new method
let myAge = 20;
console.log(myAge);


// const as variable - new method
const myAge = 20;
console.log(myAge);


// var can be updated
var myAge = 20;
console.log(myAge);
myAge = 30;
console.log(myAge); // No error


// let can be updated
let myAge = 20;
console.log(myAge);
myAge = 30;
console.log(myAge); // No error


// let can be updated
let myAge = 20;
console.log(myAge);
myAge = 30;
console.log(myAge); // No error


// const cannot be updated
const myAge = 20;
console.log(myAge);
myAge = 30;
console.log(myAge); // Error


// var is not block-scoped
let age = 20;
if (age > 18) {
    var message = "You can vote!";
    console.log(message); 
}
console.log(message);


// let is block-scoped
let age = 20;
if (age > 18) {
    let message = "You can vote!";
    console.log(message); 
}
console.log(message);


// const is block-scoped
