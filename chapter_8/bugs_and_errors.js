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
