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
