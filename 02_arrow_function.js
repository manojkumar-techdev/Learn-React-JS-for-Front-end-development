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

