// METHODS
// nothing more than properties that hold function values
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
// usually a method needs to do something with the object it was called on
// When a function is caleld as a method, as in object.method()
// the binding called (this) in its body automatically points at the object it was called on
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
// if you want to pass this explicitly you can use a functions call method, which takes
// this as the first argument and treats further arguments as normal params.
speak.call(hungryRabbit, "Burp!");
// since each function has it's own this binding, you cannot refer to this of the wrapping
// scope in a reg function with the function keyword
// arrow functions are different, do not bind their own this, but can see the this binding
// of the scope around them. thus you can reference this from inside the local function
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});

// PROTOTYPES
let empty = {};
console.log(empty.toString);
console.log(empty.toString());
// a property was pulled out of this empty object because of prototypes. When an object
// gets a request for a property it doesn't have, it defaults to it's prototype.
// For an empty object this is the Object.protoype
console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null
// as we can see an empty object returns true, though acting on object.prototype it returns
// false because it is the highest branch. Object.prototype contains a few methods such as toString
// Not all objects derive from Object.prototype, Functions derive from Function.prototype, arrays
// derive from Array.prototype.
console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // true
console.log(Object.getPrototypeOf([]) == Array.prototype); // true
// can use object.create to create an object with a specific prototype
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");
// property like speak(line) is shorthand for defining a method, creates a property speak and gives
// it a function as a value
// proto rabbit acts as a container for properties shared by all rabbits. Killer rabbit contains
// properties applying only to itself

// CLASSES
// constructor function
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
// using the new keyword, the function is treated as a constructor
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");
// names of constructors are capitalised to differentiate them from other functions
