// BINDINGS
let caught = 5 * 5;
console.log(caught + caught);

let mood = "light";
console.log(mood); // light
mood = "dark";
console.log(mood); // dark

let one = 1, two = 2;
console.log(one + two);

var name = "George";
const greeting = "Hello ";
console.log(greeting + name);

// CONSOLE.LOG FUNCTION
let x = 30;
console.log(`The value of x is ${x}`);

// CONTROL FLOW
let theNumber = Number(prompt("Pick a number")); // Number converts to number, equivalent of int()?
console.log("Your number is the square root of " + theNumber * theNumber);

// CONDITIONAL EXECUTION
let theNumber = Number(prompt("Pick a number"));
if (!isNaN(theNumber)) { // runs if isNaN evaluates to false
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you supply a number?");
}

if (1 + 1 == 2) console.log("It's true");

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small number");
} else if (num < 100) {
  console.log("Medium number");
} else {
  console.log("Large number");
}
