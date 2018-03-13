var SCRIPTS = require('./scripts');

// COMPOSABILITY
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));
// could also be written as one big loop:
let total = 0; count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count++;
  }
}
console.log(Math.round(total / count));
// filter and map method is slower but more readable and can have intermediate steps extracted out

// STRINGS AND CHARACTER CODES
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
console.log(characterScript(121));
// some method is a higher-order function
// it takes a test function and tells you if that function returns true for any 
// of the elements in the array
let horseShoe = "🐴👟";
console.log(horseShoe.codePointAt(0)); // will give actual code for an emoji since it is two units
for (let char of horseShoe) { // for/of is useful for iterating over
  console.log(char);
}
