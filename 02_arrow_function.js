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
