// GENERATORS
function* powers(n) { // asterik after function declaration declares a generator
  for (let current = n;; current *= n) {
    yield current;
  }
}

for (let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}

// // THE EVENT LOOP
// try {
//   setTimeout(() => {
//     throw new Error("Woosh");
//   }, 20);
// } catch (error) {
//   // This will not run
//   console.log("Caught!");
// }

// this example sets a timeout, but dallies until after the timeouts intended point
// of time, causing it to be late
let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);

Promise.resolve("Done").then(console.log);
console.log("Me first!");
