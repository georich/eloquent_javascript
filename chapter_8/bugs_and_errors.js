// STRICT MODE
/*
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// normally when let is forgotten js will make it a global binding
// however with strict mode an error is called
*/

/*
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // forgot new keyword
console.log(name); // Ferdinand

"use strict";
function Person(name) {
  this.name = name;
}
let ferdinand = Person("Ferdinand"); // forgot new
// TypeError: cannot set property "name" of underfined
*/
// constructors created with class notation will always complain
// regardless of strict mode

// TYPES
// JS is dynamic so will only consider types at runtime, will often convert
// types if it thinks it helps
// can comment types
// (WorldState, Array) -> {direction: string, memory: Array}
function goalOrientedRobot(state, memory) {
  
}
// subsets like TypeScript allow adding types to js

// TESTING
function test(label, body) {
  if (!body()) {
    console.log(`Failed: ${label}`);
  }
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});

// DEBUGGING
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));

// ERROR PROPAGATION
function promptNumber(question) {
  let result = Number(prompt(question));
  if (isNaN(result)) {
    return null;
  } else {
    return result;
  }
}
console.log(promptNumber("How many trees do you see?"));

// what if the function can return every kind of value?
function lastElement(array) {
  if (array.length == 0) {
    return {failed: true};
  } else {
    return {element: array[array.length - 1]};
  }
}

// EXCEPTIONS
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") {
    return "L";
  }
  if (result.toLowerCase() == "right") {
    return "R";
  }
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

// CLEANING UP AFTER EXCEPTIONS
const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) {
    return;
  }
  accounts[from] -= amount;
  accounts[getAccount()] += amount;
}

function transfer(from, amount) {
  if (accounts[from] < amount) {
    return;
  }
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}

// SELECTIVE CATCHING
for (;;) {
  try {
    let dir = promtDirection("Where?"); // typo!
    console.log("You chose", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again!");
  }
}
// will cause an infinite loop because catch ignores the exception
// we can catch a specific kind of exception, comparing its message
// property, but better to define a new type of error and use 
// instanceof to identify iy

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

// now we can catch the error more carefully
for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}

// ASSERTIONS
// checks inside a program that verify that something is the way it is
// supposed to be, not for normal operation but for programmer mistakes
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
