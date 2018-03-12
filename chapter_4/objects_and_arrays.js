// DATA SETS
let listOfNumbers = [2, 3, 5, 7, 11]; // array
console.log(listOfNumbers[2]); // 5

// PROPERTIES
listOfNumbers.length // length property of listOfNumbers

// METHODS
let doh = "Doh";
console.log(typeof doh.toUpperCase); // function
console.log(doh.toUpperCase()); // DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); // [1, 2, 3, 4, 5]
console.log(sequence.pop()); // removes and returns last element, -> 5
console.log(sequence); // [1, 2, 3, 4]

// OBJECTS
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel); // false
console.log(day1.wolf); // undefined
day1.wolf = false;
console.log(day1.wolf); // false
console.log(day1);

let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left); // 1
delete anObject.left;
console.log(anObject.left); // undefined
console.log("left" in anObject); // false
console.log("right" in anObject); // true

console.log(Object.keys(day1)); // ["squirrel", "events", "wolf"]

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); // copies all properties from one object to another
console.log(objectA); // {a: 1, b: 3, c: 4}

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false
  },
  {
    events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false
  }
] // can store data as an array of objects
