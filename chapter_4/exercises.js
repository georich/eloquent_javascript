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

// A LIST
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  array = []
  for (let layer = list; layer; layer = layer.rest) {
    array.push(layer.value);
  }
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(element, list) {
  return {value: element, rest: list};
}
console.log(prepend(10, prepend(20, null)));

// DEEP COMPARISON
let obj = {here: {is: "an"}, object: 2};

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  // check both a and b are objects or are not null
  if (typeof a != "object" || typeof b != "object" || a == null || b == null) {
    return false;
  }
  let keysOfA = Object.keys(a);
  let keysOfB = Object.keys(b);
  // easy check via length
  if (keysOfA.length != keysOfB.length) {
    return false;
  }
  // if lengths were the same need to check if each key is the same
  for (let key of keysOfA) {
    if (!keysOfB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
