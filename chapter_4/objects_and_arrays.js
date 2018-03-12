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
