// VECTOR TYPE
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(addition) {
    return {x: this.x + addition.x, y: this.y + addition.y};
  }

  minus(subtraction) {
    return {x: this.x - subtraction.x, y: this.y - subtraction.y};
  }

  get length() {
    return Math.sqrt(this.x**2 + this.y**2);
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
