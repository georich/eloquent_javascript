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
