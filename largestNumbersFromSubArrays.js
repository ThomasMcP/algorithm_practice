// function largestOfFour(arr) {
//   // You can do this!
//   let biggestNumbers = [];
//   for (var i = 0; i < arr.length; i++) {
//     let largest = 0;
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > largest){
//         largest = arr[i][j];
//         console.log(largest);
//       }
//     }
//     biggestNumbers.push(largest);
//   }
//   return biggestNumbers;
// }
//
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

function largestOfFour(arr) {
  return arr.map(function(subArray){
    return subArray.reduce(function(prev, current) {
      return (current > prev)? current : prev;
    })
  });
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
