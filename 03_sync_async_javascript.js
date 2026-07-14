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


// multiple synchronous functions
// Don't worry too much about the details, just look at the shape!
getData(userId, (user) => {
  console.log("Got user:", user);
  getPosts(user.id, (posts) => {
    console.log("Got posts:", posts);
    getComments(posts[0].id, (comments) => {
      console.log("Got comments:", comments);
      // And so on... it keeps nesting deeper!
    }, (error) => { /* handle comments error */ });
  }, (error) => { /* handle posts error */ });
}, (error) => { /* handle user error */ });
