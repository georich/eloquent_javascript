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

// THE LOCKED BOX
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked) {
    return body();
  }
  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);
console.log(box.content);
