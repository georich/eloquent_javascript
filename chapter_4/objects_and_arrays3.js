// REST PARAMETERS
function max(...numbers) { // (...numbers) accepts any number of arguments, analogous to *args?
  let result = -Infinity
  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log(max(4, 1, 9, -2)); // 9

let numbers = [5, 1, 7];
console.log(max(...numbers)); // can also call functions with an array using ...

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); // ["will", "never", "fully", "understand"]

// THE MATH OBJECT
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}
console.log(randomPointOnCircle(2));

// DESTRUCTURING
let {name} = {
  name: "Faraji",
  age: 23
};
console.log(name);
