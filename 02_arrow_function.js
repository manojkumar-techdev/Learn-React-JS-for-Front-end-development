// function declaration
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));


// function expression
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));


// function with single parameter - function declaration
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));


// arrow function with single parameter
const greet = name => {
  return "Hello, " + name;
};

console.log(greet("Alice"));


// function declaration with no parameter
function sayHi() {
  return "Hi there!";
}
console.log(sayHi());


// arrow function with no parameters
const sayHi = () => {
  return "Hi there!";
};

console.log(sayHi());


// Arrow function with explicit return
const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(4, 5));      // Output: 20



// Arrow function with IMPLICIT return (shorter!)
const multiplyShort = (x, y) => x * y; 
console.log(multiplyShort(4, 5)); // Output: 20


// Example with single parameter and implicit return
const square = number => number * number;
console.log(square(9));


// arrow function with rreturn values
const greet = name => "Hello, " + name;
console.log(greet("Sam"));


// transforming array with arrow function
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);


// arrow function -- "this" is not bound to object
const person = {
  name: "Alice",
  sayHello: () => {
    console.log(this.name);
  }
};

person.sayHello(); // Output: undefined
