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


// Object Destructuring - Renaming Values
const { firstName: fName, age: personAge } = person;
console.log(fName);      // Output: Alice
console.log(personAge);  // Output: 30



// adding default values for non-existing values
const { firstName, country = 'Unknown' } = person;
console.log(firstName); // Output: Alice
console.log(country);   // Output: Unknown (since 'country' wasn't in the person object)



// Array Destructuring - Old Method
const colors = ['red', 'green', 'blue'];

// To get the first two colors into variables:
const firstColor = colors[0];
const secondColor = colors[1];

console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
