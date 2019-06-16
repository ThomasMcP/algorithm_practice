// FILTERS OUT COPIES - COULD BE BETTER!
function diffArray(arr1, arr2) {
  let newArr = [];
  let combinedArr = [...arr1, ...arr2];
  for (let i = 0; i < combinedArr.length; i++) {
    if (!newArr.includes(combinedArr[i])) {
      newArr.push(combinedArr[i]);
    }
  }
  return newArr;
}

// FIND UNIQUE VALUES - VALUES NOT SHARED BETWEEN TWO 1 DIMENTIONAL ARRAYS
function diffArray(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr.filter(
    item => !arr1.includes(item) || !arr2.includes(item)
  );
}





// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
