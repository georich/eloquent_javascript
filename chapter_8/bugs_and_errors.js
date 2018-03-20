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
