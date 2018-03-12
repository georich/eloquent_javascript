// OPTIONAL ARGUMENTS
function square(x) {
  return x * x;
}
console.log(square(4, true, "hedgehog")); // ignores extra arguments and just computes using the first one

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10)); // since b is left out undefined is passed instead
console.log(minus(10, 5));

function power(base, exponent = 2) { // default function paramater similar to python
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4));
console.log(power(2, 6));

// CLOSURE
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // 10
