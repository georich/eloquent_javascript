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
