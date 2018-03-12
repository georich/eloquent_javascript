// DEFINING A FUNCTION
const square = function(x) {
  return x * x
};
console.log(square(12));

const makeNoise = function() {
  console.log("Beep!");
};
makeNoise()

const power = function(base, exponent) {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));

// PARAMETERS AND SCOPES
let x = 10;
if (true) {
  let y = 20; // local to this block, const is similar
  var z = 30;
  console.log(x + y + z); // 60
}
// y is not visible here
console.log(x + z); // 40

// NESTED SCOPE
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor // not visible outside of this function
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);
