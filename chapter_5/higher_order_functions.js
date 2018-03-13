// ABSTRACTION
/*
hide details and give the ability to talk about
problem at a higher (abstract) level
*/

// ABSTRACTING REPETITION
// common to do something a number of times in a for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// can we abstract 'do something N times' as a function
// can easily write log N times
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// what if we want to do x, n times? can pass the action as a function value
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);
// can also define a function value on the spot
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// HIGHER ORDER FUNCTIONS
// create new functions
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true
// change other functions
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// write functions that provide new types of control flow
function unless(test, then) {
  if (!test) then();
}
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// built in array method that provides something like a for/of loop
// as a higher function
["A", "B"].forEach(l => console.log(l));

// SCRIPT DATA SET
var SCRIPTS = require('./scripts');
// has the keys: name, ranges, direction, year, living and link

// FILTERING ARRAYS
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, script => script.living)); // is collecting all living languages
// though filter is a standard method and a better example is
console.log(SCRIPTS.filter(s => s.direction == "ttb"));
