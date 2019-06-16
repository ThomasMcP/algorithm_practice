// ALPHABETICAL ORDER
// function alphabeticalOrder(arr) {
//   return arr.sort((a, b) => {
//     return a - b;
//   });
// }
//
// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// SPLIT STRING AND AVOID PUNCTUATION
// function splitify(str) {
//   return str.split(/\W/);
// }
//
// console.log(splitify("Hello World,I-am code"));

// CONVERT ARTICLE TITLES TO URL SLUG (this-that-this-etc)
// the global variable
// var globalTitle = "Winter Is Coming";

// Add your code below this line
// function urlSlug(title) {
//   return title.split(/\W/).filter((obj)=>{
//     return obj !=='';
//   }).join("-").toLowerCase();
// }
// // Add your code above this line
//
// var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
// console.log(winterComing);

// USING .EVERY FUNCTION
function checkPositive(arr) {
  return arr.every((index) => index >= 1);
}
console.log(checkPositive([1, 2, 3, -4, 5]));
