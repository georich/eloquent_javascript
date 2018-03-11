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