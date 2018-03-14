// MAPS
// a amap is a data structure associating values with other values, e.g.
// names to ages. Objects are useful for this
let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62
};
console.log(`Julia is ${ages.Julia}`);
console.log(`Julia is ${ages["Julia"]}`);
// property name are the names, property values are the ages
console.log("Is Jack's age known?", "Jack" in ages); // false
console.log("Is toString's age known?", "toString" in ages); // true
// we didn't list toString, but because objects derive from Object.prototype
// it looks like the toString property is there. This is dangerous
// Once workaround is to pass null to Object.create so nothing is derived.
console.log("toString" in Object.create(null)); // false
// Object property names must be strings.
// The class Map is written for exactly this purpose, it stores a mapping and allows
// any type of keys
let agesTwo = new Map();
agesTwo.set("Boris", 39);
agesTwo.set("Liang", 22);
agesTwo.set("Julia", 62);
console.log(`Julia is ${agesTwo.get("Julia")}`); // Julia is 62
console.log("Is Jack's age known?", agesTwo.has("Jack")); // Is Jack's ... false
// methods set, get and has are part of the Map object.
// hasOwnProperty ignores the objects prototype
console.log({x: 1}.hasOwnProperty("x")); // true
console.log({x: 1}.hasOwnProperty("toString")); // false

// POLYMORPHISM
class Rabbit {
  constructor(type){
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
// String function calls toString method on an object, can be manually entered
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit)); // a black rabbit
// different kinds of objects can be plugged into toString, this is polymorphism

// SYMBOLS
// unlike strings, newly created symbols are unique, you cannot create the same symbol twice
let sym = Symbol("name");
console.log(sym == Symbol("name")); // false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]); // 55
// symbols are good for defining interfaces to live alongside other propertioes
// no matter the name
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString()); // 1, 2
console.log([1, 2][toStringSymbol]()); // 2cm of blue yarn
// can include symbol properties by using square brackets
let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]()); // a jute rope

// ITERATOR INTERFACE
// object given to for/of is expected to be iterable, done with method Symbol.iterator.
// returns an object that provides an iterator, calling next method returns next result.
// result should have a value property, and a done property which is true when no more results
// false otherwise. next, value and done are plain strings and not symbols.
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); // {value: "O", done: false}
console.log(okIterator.next()); // {value: "K", done: false}
console.log(okIterator.next()); // {value: undefined, done: true}
// iterable data structure
class Matrix {
  constructor(width, height, content = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width;  x++) {
        this.content[y * width + x] = content(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}
// when looping over a matrix, usually intereseted in position of elements
// as well as the elements themselves, so we'll produce x, y and value properties
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) {
      return {done: true};
    }
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}
// this class tracks progress of iterating over a matrix in x, y.
Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};
// can now loop over a matrix using for/of
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}

// GETTERS, SETTERS AND STATICS
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};
console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // 71.6
temp.fahrenheit = 86;
console.log(temp.celsius); // 30
// allows you to read and write temp in either Celsius or
// Fahrenheit, but only stores it in Celsius, and automatically
// converts to Celsius in the fahrenheit getter and setter.
// Methods written with static are stored in the constructor,
// so Temperature class allows you to write Temperature.fromFahrenheit(100)
// to create a temperature using Fahrenheit

// INHERITANCE
class SymmetricMatrix extends Matrix {
  constructor(size, content = (x, y) => undefined) {
    super(size, size, (x, y) => { // similar to super in python OOP
      if (x < y) {
        return content(y, x);
      } else {
        return content(x, y);
      }
    });
  }

  set(x, y, value) { // redefining set but want to use original behaviour
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}
let matrixTwo = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrixTwo.get(2, 3)); // 3, 2
