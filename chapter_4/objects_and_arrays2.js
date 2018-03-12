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
