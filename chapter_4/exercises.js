// SUM OF A RANGE
function range(start, end, step = 1) {
  let array = []
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }  
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array
}
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

function sum(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result
}
console.log(sum(range(1, 10)));
console.log(sum(range(5, 2, -1)));

// REVERSING AN ARRAY
function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
  let heldValue = 0;
  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    heldValue = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = heldValue;
  }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
