const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((n) => {
    if(n > 0 && Number.isInteger(n)) {
      return n;
    }
  })
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray).map(n => n * n);
console.log(squaredIntegers);
