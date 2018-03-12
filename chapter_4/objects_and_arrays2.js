// LYCANTHROPE'S LOG
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
/*
object added to journal looks odd, instead of events: events
it just gives events. This is short hand, if a property name in {}
has no value it takes it from the binding with the same name.
As shown in the following
*/
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(journal);

// ARRAY LOOPS

for (let i = 0; i < array.length; i++) { // common way to loop through all elements in an array
  let entry = array[i];
  // Do something
}

for (let entry of array) { // modern way of looping through elements, good for arrays, strings and some others
  console.log(`${entry.events.length} events.`);
}

// FURTHER ARRAYOLOGY
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift(); // removes element from end of array and returns it
}
function rememberUrgently(task) {
  todoList.unshift(task); // adds task to start of array
}

console.log([1, 2, 3, 2, 1].indexOf(2)); // 1, returns the index of the first instance
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // 3, returns fist instance beginning from the end

console.log([0, 1, 2, 3, 4].slice(2, 4)); // [2, 3], end index is exclusive
console.log([0, 1, 2, 3, 4].slice(2)); // [2, 3, 4] slices to end if end point not given

console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]
