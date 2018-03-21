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
