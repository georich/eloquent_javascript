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
