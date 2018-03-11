// LOOPING A TRIANGLE
let triangleCount = 1;
while (triangleCount < 8) {
  console.log("#".repeat(triangleCount));
  triangleCount++;
}

triangleCount = 1;
initalRow = "#";
while (triangleCount < 8) {
  console.log(initalRow);
  initalRow = initalRow + "#";
  triangleCount++
}

// FIZZBUZZ
for (let num = 1; num <= 100; num++) {
  if (num % 15 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num)
  }
}