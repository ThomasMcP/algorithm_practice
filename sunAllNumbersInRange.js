// function sumAll(arr) {
//   let count = 0;
//   let sumArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   for (let j = 0; j == )
//   sumArr.push(count);
//   return sumArr;
// }
//
// console.log(sumAll([1, 4]));

// USE MAX AND MIN MATH.METHODS.

function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
