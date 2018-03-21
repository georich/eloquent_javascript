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

// REPEATING PARTS OF A PATTERN
// a + after something indicates a repeating element
console.log(/'\d+'/.test("'123'")); // true
console.log(/'\d+'/.test("''")); // false
console.log(/'\d*'/.test("'123'")); // true
console.log(/'\d*'/.test("''")); // true
// * is similar but also allows the pattern to match zero ties

// ? allows a pattern to match zero or one times
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); // true
console.log(neighbor.test("neighbor")); // true

// to indicate it should appear a precise number of times use
// curly braces, {4} or for a range {2,4} 2-4 times exactly
let dateTimeRange = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTimeRange.test("30-1-2003 8:45")); // true
// can also use open ended ranges {5, }, meaning 5 or more

// GROUPING SUBEXPRESSIONS
// to use * or + on more than one element parentheses are needed
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohoooo")); // true
// first and second + apply to the second o's in boo and hoo
// the third + applies to the whole group (hoo+) matching one
// or more hoo's. the i makes the regex case insensitive

// MATCHES AND GROUPS
// .exec will return null for no match otherwise will return an object
// with info on the match
let match = /\d+/.exec("one two 100");
console.log(match); // ['100', index: 8, input: 'one two 100']
console.log(match.index); // 8

// string values have a match that behaves similarly
console.log("one two 100".match(/\d+/)); // ["100", index: 8, input: 'one two 100']
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// when a group doesn't match at all it will yield undefined in the array
// if it matches multiple times, only the last match will be in the array
