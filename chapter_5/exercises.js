// FLATTENING
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)));

// YOUR OWN LOOP
function loop(value, limit, step, fn) {
  for (let i = value; limit(i); i = step(i)) {
    fn(i);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);

// EVERYTHING
function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}
console.log(every([1, 3 ,5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

function everySome(array, test) {
  if (array.some(element => !test(element))) {
    return false;
  }
  return true;
}
console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));
