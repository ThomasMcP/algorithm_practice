// THIS SEARCHES FOR MULTIPLE OF SAME VALUE. ADDING AN I TO THE REGEX WILL SEARCH FOR MULTIPLE AND CASE VARIATIONS
// let testStr = "Repeat, Repeat, Repeat";
// let repeatRegex = /Repeat/g;
// console.log(testStr.match(repeatRegex));
// Returns ["Repeat", "Repeat", "Repeat"]

// TEST WORD SEARCHING FUNCTION.
// function searchFunction(stringToSearch, searchWord) {
//   let searchRegex = /searchWord/gi;
//   return stringToSearch.match(searchRegex);
// }
//
// console.log(searchFunction("This this is the the String", "the"));

// BASIC WORD COUNTER
// let jennyStr = "Jenny8675309 Jenny Jenny Jenny Jenny Jenny Jenny Jenny Jenny";
// let myRegex = /Jenny/ig;
// matches all letters and numbers in jennyStr
// console.log(jennyStr.match(myRegex));
// console.log(jennyStr.match(myRegex).length);


// FINDING CONSECUTIVE LETTERS. (this finds consecutive 's')
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);

// using 'lazy' expressions!!!!!
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

// USING ALL ALPHA NUMERIC SHORTHAND SEARCH
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;
//
// console.log(result);

// Quantity Specifiers
// let ohStr = "Ohhhhhhh";
// let ohRegex = /h{3,6}/; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(result);

// Lookaheads
// let sampleWord = "astronaut123";
// let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);

// Capture Group
// let repeatNum = "101 102 103";
// let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
// let result = reRegex.test(repeatNum);
// console.log(result);

// TEST
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/; // Change this line
// let result = hello.replace(wsRegex, ""); // Change this line
// console.log(result);
//
// \(([0-9a-f][a-f0-9]:[a-f0-9][a-f0-9]

var regExp = /\(([^)]+)\)/;
var matches = regExp.exec("I expect five hundred dollars ($500).");

//matches[1] contains the value between the parentheses
console.log(matches[1]);
