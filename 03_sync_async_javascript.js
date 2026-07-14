// multiple logs in javascript
console.log("Step 1: Get bread");
console.log("Step 2: Add filling");
console.log("Step 3: Put top slice");
console.log("Step 4: Eat sandwich!");


// callbacks - the old way
console.log("Timer Start");

// Tell setTimeout to call our function AFTER 2000 milliseconds (2 seconds)
setTimeout(() => {
  console.log("Inside Timeout! This runs later.");
}, 2000);

console.log("Timer End (but timeout is still waiting)");
