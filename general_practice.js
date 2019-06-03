// function mixedNumbers(arr) {
//   // change code below this line
//   arr.push('I', 2, 'three');
//   arr.unshift(7, 'VIII', 9);
//   // change code above this line
//   return arr;
// }
//
// // do not change code below this line
// console.log(mixedNumbers(['IV', 5, 'six']));

// ARRAY FILTERING
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].indexOf(elem) == -1){
//       newArr.push(arr[i]);
//     }
//   }
//   // change code above this line
//   return newArr;
// }
//
// // change code here to test different cases:
// console.log(filteredArray([[1, 2, 4], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3));


// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
//
// function iterate(users) {
//   let count = 0;
//   for (let user in users) {
//     if (users[user].online == true){
//       count++;
//     }
//   }
//   return count;
// }
//
// // console.log(iterate(users));
//
// function getArrayOfUsers(obj) {
//   // change code below this line
//   return Object.keys(obj);
//   // change code above this line
// }
//
// console.log(getArrayOfUsers(users));
