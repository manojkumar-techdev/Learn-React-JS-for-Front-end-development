// Object Destrucuring
const person = {
  firstName: 'Alice',
  age: 30,
  city: 'Wonderland'
};

// To get the name and age into variables:
const firstName = person.firstName;
const age = person.age;

console.log(firstName); // Output: Alice
console.log(age);       // Output: 30


// Modern Destructuring
const person = {
  firstName: 'Alice',
  age: 30,
  city: 'Wonderland'
};

// Destructuring: Pull out firstName and age into variables
const { firstName, age } = person;

console.log(firstName); // Output: Alice
console.log(age);       // Output: 30

// You can grab any properties you need
const { city } = person;
console.log(city);      // Output: Wonderland
