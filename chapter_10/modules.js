// IMPROVISED MODULES

const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();
console.log(weekDay.name(weekDay.number("Sunday")));

// EVALUATING DATA AS CODE
const x = 1;
function evalAndReturnX(code) {
  eval(code); // will execute a string in current scope
  return x;
}
console.log(evalAndReturnX("var x = 2")); // 2

// less scary way is the Function constructor
// two arguments, string contained comma-separated
// list of argument names and a string containing
// the function body
let plusOne = Function("n", "return n + 1");
console.log(plusOne(4)); // 5

// COMMONJS
// main concept is that of a function called require
// examples
// const ordinal = require("ordinal");
// const {days, months} = require("date-names");
// interface of ordinal is a single function, whereas date-names exports
// an object containing multiple things

// const {parse} = require("ini") // using a package from npm

// ECMASCRIPT MODULES
// import ordinal from "ordinal";
// import {days, months} from "date-names";

// export function formatDate(date, format) {/* ... */}

// if you import a module without braces you get the default binding
// to create a default binding use
export default ["Winter", "Spring", "Summer", "Autumn"];
// can rename imported binding
// import {days as dayNames} from "date-names";
