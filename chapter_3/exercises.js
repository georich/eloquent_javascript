// MINIMUM
function minimum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(minimum(0, 10));
console.log(minimum(0, -10));

// RECURSION
function isEven(num) {
  if (num < 0) {
    return "You must use a positive number!";
  }
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// BEAN COUNTING
/*
function countBs(string) {
  let count = 0;
  for (let position = 0; position < string.length; position++) {
    if (string[position] == "B") {
      count++
    }
  }
  return count;
}
*/
function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"));

function countChar(string, letter) {
  let count = 0;
  for (let position = 0; position < string.length; position++) {
    if (string[position] == letter) {
      count++
    }
  }
  return count;
}
console.log(countChar("kakkerlak", "k"));
