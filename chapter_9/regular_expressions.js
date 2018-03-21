// CREATING A REGULAR EXPRESSION
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1, re2);
let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus);

// TESTING FOR MATCHES
console.log(/abc/.test("abcde")); // true
console.log(/abc/.test("abxde")); // false

// SETS OF CHARACTERS
// could just use indexOf to find a string of abc
// if we wanted to match any number, could use square brackets
console.log(/[0123456789]/.test("in 1992")); // true
console.log(/[0-9]/.test("in 1992")); // true
// can use (-) in square brackers to indicate a range along unicode
// characters
/*
\d any digit character
\w an alphanumeric character
\s any whitespace character
\D character that is not a digit
\W a nonalphanumeric character
\S a nonwhitespace character
. any character except for newline
*/
// could match a time date format with
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("30-01-2003 15:20")); // true
console.log(dateTime.test("30-Jan-2003 15:20")); // false
// ^ caret means any characters except the ones in the set
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110")); // false
console.log(notBinary.test("1100100010200110")); // true
