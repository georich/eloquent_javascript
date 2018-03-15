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

// GROUPS
class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }
  
  delete(value) {
    // let tempArray = [];
    if (this.has(value)) {
      this.group = this.group.filter(i => i != value);
      // console.log(tempArray);
      // this.group = tempArray;
    }
  }

  has(value) {
    return this.group.includes(value);
  }
  
  static from(iterable) {
    let group = new Group;
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([0, 5, 10])
group.add(10);
group.add(10);
group.add(15);
console.log(group.group);
console.log(group.has(10));
group.delete(10);
console.log(group.group);
