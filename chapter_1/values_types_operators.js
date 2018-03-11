// NUMBERS
1 // int
9.8 // fractional, float?
2.998e8 // exponent, 2.998 * 10^8

// ARITHMETIC
console.log(100 + 4 * 11);
console.log(100 % 33); // modulo

// SPECIAL NUMBERS
Infinity
-Infinity
NaN // Not a number

// STRINGS
"A string would look like this"
console.log("This is the first line\nAnd this is the second"); // escape character as usual
"con" + "cat" + "e" + "nate" // "concatenate"
console.log(`half of 100 is ${100 / 2}`);
// template literals (similar to f-string), requires the use of backticks `

// UNARY OPERATORS
console.log(typeof 4.5);
console.log(typeof "x");

// BOOLEAN VALUES
// COMPARISON
console.log(3 > 2); // true
console.log("Apple" == "Orange"); // false
console.log("Apple" != "Orange") // true
console.log(NaN == NaN);
// LOGICAL OPERATORS
console.log(true && false); // false
console.log(true && true); // true
console.log(false || true) // true
console.log(false || false) // false
// CONDITIONAL OPERATOR
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2
// if true returns value after ?, if false returns value after :

// EMPTY VALUES
null
undefined

// AUTOMATIC TYPE CONVERSION
8 * null // 0
"5" - 1 // 4
"5" + 1 // 51
"five" * 2 // NaN
false == 0 // true
null == undefined // true
null == 0 // false
// both sides need to be null/defined to return true
console.log(5 == "5"); // true
console.log(5 === "5"); // false, also checking type

// SHORT-CIRCUITING OF LOGICAL OPERATORS
console.log(null || "user") // user
console.log("Agnes" || "user") // Agnes
// will return value on left if that can evaluate true, otherwise right
//opposite for &&
console.log(null && "user") // null
