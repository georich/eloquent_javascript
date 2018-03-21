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

// THE DATE CLASS
console.log(new Date()); // will get the current date or time
console.log(new Date(2009, 11, 9)); // can produce a specific date
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); // months start at 0 so 11 is Dec
console.log(new Date(2013, 11, 19).getTime()); // milliseconds passed since 1970
console.log(new Date(1387407600000)); // milliseconds passed in from previous line

// can create a function to create a date object from a string
function getDate(string) {
  let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
// undescore is used to ignore the full match element from exec
console.log(getDate("30-1-2003"));

// WORD AND STRING BOUNDARIES
// ^ and $ indicate the start and end of an input string
// \b indicates a word boundary
console.log(/cat/.test("concatenate")); // true
console.log(/\bcat\b/.test("concatenate")); // false

// CHOICE PATTERNS
// can use pipe character to denote choice
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs")); // true
console.log(animalCount.test("15 pigchickens")); // false

// REPLACE METHOD
console.log("papa".replace("p", "m")); // mapa
console.log("Borobudur".replace(/[ou]/, "a")); // Barobudur
console.log("Borobudur".replace(/[ou]/g, "a")); // Barabadar, 'g' is the global flag

// to swap names in a Lastname, Firstname set up
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));
// $1 and $2 in the replacement string refer to the parenthesized groups in the pattern
// $1 is replaced by the text that matches first group, $2 by the second and so on

// another example
let s = "the cia and the fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase())); // the CIA and FBI

// GREED
// possible to use replace to write a function that removes comments from js code
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3")); // 1 + 3
console.log(stripComments("x = 10; // ten!")); // x = 10;
console.log(stripComments("1 /* a */+/* b */ 1")); // 1 1

// DYNAMICALLY CREATING REGEXP OBJECTS
let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi"); // gi = global and case insensitive
console.log(text.replace(regexp, "_$1_")); // _Harry_ is a suspicious character

// SEARCH METHOD
// like indexOf it returns -1 if not found
console.log("  word".search(/\S/)); // 2
console.log("   ".search(/\S/)); // -1
// no way with this method to indicate a starting position

// LASTINDEX PROPERTY
// lastIndex controls where the next match will start
let pattern = /y/g;
pattern.lastIndex = 3;
let matchTwo = pattern.exec("xyzzy");
console.log(matchTwo.index); // 4
console.log(pattern.lastIndex); // 5

let global = /abc/g;
console.log(global.exec("xyz abc")); // ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // null

let digit = /\d/g;
console.log(digit.exec("here it is: 1")); // ["1"]
console.log(digit.exec("and now: 1")); // null

console.log("Banana".match(/an/g)); // ["an", "an"]

// LOOPING OVER MATCHES
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let matched;
while (matched = number.exec(input)) {
  console.log("Found", matched[0], "at", matched.index);
}
// putting the exec method in the while condition runs it until no
// more matches are found
