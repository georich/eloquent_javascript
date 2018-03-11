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

// WHILE AND DO LOOPS
let number = 0
while (number <= 12) {
  console.log(number);
  number += 2;
}

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName); // do while executes at least once since check is done at the end
console.log(yourName);

// FOR LOOPS
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

// BREAKING OUT OF A LOOP
for (let current = 20; current < 100; current++){
  if (current % 7 == 0) {
    console.log(current);
    break; // js also has continue like python
  } 
}

// SWITCH
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
/* will start executing code when it reaches a label which matches
i.e. entering sunny will run the cases for both sunny and cloudy
because only the cloudy block contains the break */