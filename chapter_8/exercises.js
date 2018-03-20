// RETRY
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let achieved = 0;
  let result = 0;
  while (achieved == 0) {
    achieved = 1;
    try {
      result = primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        achieved = 0;
      } else {
        throw new Error(error);
      }
    }
  }
  return result;
}
console.log(reliableMultiply(8, 8));
