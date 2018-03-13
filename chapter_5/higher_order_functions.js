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
