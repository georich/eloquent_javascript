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

// RECURSION
// recursive solution for power()
/*
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3)); // 8
*/

// GROWING FUNCTIONS
/*
wanting to produce something like:
007 Cows
011 Chickens
*/
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

// and what if the farmer now has pigs too? can rewrite this into two functions
// rather than adding the same while loop again to printFarmInventory

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);

// but we can lift out a single concept to further make it more readable

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
