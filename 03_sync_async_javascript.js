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



// promises - the better way
console.log("Start fetching data...");

fetchDataFromServer() // This returns a Promise
  .then(data => {
    // This runs ONLY if the Promise is fulfilled (success)
    console.log("Success! Data received:", data);
    // We can chain promises! Let's process the data
    return processData(data); // Assume this also returns a Promise
  })
  .then(processedResult => {
    console.log("Data processed successfully:", processedResult);
  })
  .catch(error => {
    // This runs ONLY if ANY Promise in the chain is rejected (failure)
    console.error("Error occurred:", error);
  });


// sync await
// We must wrap the await calls in an async function
async function handleData() {
  console.log("Start fetching data (using async/await)...");
  try {
    // Pause here until fetchDataFromServer() Promise resolves
    let data = await fetchDataFromServer();
    console.log("Success! Data received:", data);

    // Pause here until processData() Promise resolves
    let processedResult = await processData(data);
    console.log("Data processed successfully:", processedResult);

  } catch (error) {
    // If any 'await'ed Promise rejects, it jumps to the catch block
    console.error("Error occurred:", error);
  }
  console.log("Async function finished.");
}

// Call the async function to start the process
handleData();
console.log("handleData function called, waiting for async operations...");



// order of execution in asynchronous way
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0); // Note the 0 millisecond delay

console.log("C");


// async and await
async function getUserPosts(userId) {
  try {
    console.log("Fetching user...");
    const user = await fetchUser(userId); // Takes 1 second
    console.log("Fetching posts...");
    const posts = await fetchPosts(user.id); // Takes 1 second
    console.log("Done");
    return posts;
  } catch (error) {
    console.error("Failed:", error);
  }
}

getUserPosts(123);
console.log("Function called");


// error handling
const promise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Success");
  } else {
    reject("Something went wrong!");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


// async await with try catch
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Network Error");
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();


// promise example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});


//callback with anonymous function
function calculate(a, b, callback) {
  callback(a, b);
}

calculate(10, 20, function (x, y) {
  console.log(x + y);
});
