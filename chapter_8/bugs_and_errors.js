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
