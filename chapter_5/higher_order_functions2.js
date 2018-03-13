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
