// CREATING A REGULAR EXPRESSION
let re1 = new RegExp("abc");
let re2 = /abc/;
console.log(re1, re2);
let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus);

// TESTING FOR MATCHES
console.log(/abc/.test("abcde")); // true
console.log(/abc/.test("abxde")); // false
